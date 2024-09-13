"use client"

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useEffect, useState } from "react";

const formSchema = z.object({
    comment: z.string().min(2, {
        message: "Comment must be at least 2 characters.",
    }),
    platform: z.string().min(2, {
        message: "Platform is required.",
    }),
    type: z.string().min(2, {
        message: "Type is required.",
    }),
    url: z.string().min(2, {
        message: "URL is required.",
    }),
});

const ProfileForm = () => {

    const [txSignature, setTxSignature] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const router = useRouter();
    useEffect(() => {
        const savedSignature = localStorage.getItem('txSignature');
        if (savedSignature) {
            setTxSignature(savedSignature);
        }
    }, []);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            comment: "",
            platform: "",
            type: "",
            url: ""
        },
    });

    interface Option {
        value: string;
        label: string;
    }

    const platformOptions: Record<string, Option[]> = {
        Twitter: [
            { value: "Follow", label: "Follow" },
            { value: "Retweet", label: "Retweet" },
            { value: "Comment", label: "Comment" },
        ],
        Youtube: [
            { value: "Subscribe", label: "Subscribe" },
            { value: "Like", label: "Like" },
            { value: "Comment", label: "Comment" },
        ],
        // Add more platform-specific options here if needed
    };

    const { watch } = form;
    const platformValue = watch("platform");

    const getSelectOptions = (platform: string) => {
        return platformOptions[platform] || [{ value: "No options", label: "No options" }];
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!txSignature) {
            setError("Payment is required before submitting the form.");
            return;
        }
        setLoading(true);
        try {
            const { platform, comment, url, type } = values;
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/v1/user/task`, {
                platform, comment, url, type,
                signature: txSignature
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            localStorage.removeItem('txSignature');
            router.push(`/task/${response.data.id}`);
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    }

    async function makePayment() {
        if (!publicKey) {
            setError("Wallet is not connected.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: new PublicKey("HnAAowqiYgy9y5VGo585hEHwh8JKEShV7Dozf4LUc4wp"),
                    lamports: 100000000,
                })
            );

            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();

            const signature = await sendTransaction(transaction, connection, { minContextSlot });
            await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

            setTxSignature(signature);
            // router.push(signature);
            localStorage.setItem('txSignature', signature);
        } catch (error) {
            console.error("Payment error:", error);
            setError("An error occurred during the payment process.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Platform</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a platform" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Twitter">Twitter</SelectItem>
                                    <SelectItem value="Youtube">Youtube</SelectItem>
                                    <SelectItem value="Discord">Discord</SelectItem>
                                    <SelectItem value="Telegram">Telegram</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                You can manage platform addresses in your{" "}
                                <Link href="/examples/forms">platform settings</Link>.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value} disabled={!platformValue}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {getSelectOptions(platformValue).map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                You can manage email addresses in your{" "}
                                <Link href="/examples/forms">email settings</Link>.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Comment</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Add your comment here" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add additional comments here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                                Add additional URL here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {error && <div className="text-red-500">{error}</div>}
                {txSignature ? (
                    <Button type="submit" disabled={loading}>Submit</Button>
                ) : (
                    <Button onClick={makePayment} disabled={loading}>{loading?"Loading..":"Pay"}</Button>
                )}
            </form>
        </Form>
    );
};

export default ProfileForm;
