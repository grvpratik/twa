'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import axios from 'axios';

const PaymentForm = ({ token }: { token: string }) => {
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

    async function makePayment() {
        if (!publicKey) {
            setError("Wallet is not connected.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Create the transaction
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: new PublicKey("j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF"),
                    lamports: 100000000, // 0.1 SOL
                })
            );

            // Get the latest blockhash and context
            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();

            // Send the transaction
            const signature = await sendTransaction(transaction, connection, { minContextSlot });

            // Confirm the transaction
            const confirmation = await connection.confirmTransaction(
                { blockhash, lastValidBlockHeight, signature },
                'finalized'
            );

            if (confirmation.value.err) {
                throw new Error('Transaction failed to confirm');
            }

            // Save the signature in state and local storage
            setTxSignature(signature);
            localStorage.setItem('txSignature', signature);

            // Send the signature to the backend
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/v1/payer/task`, {
                signature: signature // Use the signature directly instead of txSignature
            }, {
                headers: {
                    "Authorization": token
                }
            });

            // Clear local storage and navigate to task page
            localStorage.removeItem('txSignature');
            router.push(`/task/${response.data.id}`);

        } catch (error) {
            console.error("Payment error:", error);
            setError("An error occurred during the payment process.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Button onClick={makePayment} disabled={loading}>
                {loading ? "Loading..." : "Pay"}
            </Button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default PaymentForm;
