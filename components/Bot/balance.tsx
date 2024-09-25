"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useTelegram } from "@/provider/telegram-provider"; // Assume this custom hook exists
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowLeftRight, ArrowUp, Bell, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const fetchRewardPoints = async (telegramInitData: string) => {
    console.log({ telegramInitData });
    const response = await axios.post("http://localhost:8080/v1/user/me", null, {
        headers: {
            Authorization: `tma ${telegramInitData}`,
        },
    });
    return response.data.points;
};

const RewardPoints = () => {
    const { webApp } = useTelegram(); // Custom hook to get Telegram WebApp data

    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["rewardPoints"],
        queryFn: async () => fetchRewardPoints(webApp?.initData!),
        enabled: !!webApp?.initData, // Only run the query if initData is available
    });

    if (isLoading || isFetching) return <div>Loading reward points...</div>;
    if (error) return <div>Error fetching reward points: {error.message}</div>;

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <Avatar className=" size-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <Bell className="size-5" />
                </div>
            </div>

            <div className="">
                <h4 className="text-xs leading-none font-semibold my-1 text-gray-700">
                    Balance
                </h4>
                <p className={cn("text-3xl font-semibold font-mono")}>{data || 0}</p>
            </div>
            <div className="my-2 flex items-center justify-center *:flex-1 gap-2">
                <div className="flex flex-col gap-1 items-center justify-center text-sm">
                    <div className=" w-16 h-8 flex items-center justify-center rounded-full overflow-hidden bg-gray-200 "><Plus className="size-4"/></div>
                    <span>add</span>{" "}
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-sm">
                    <div className=" w-16 h-8 flex items-center justify-center rounded-full overflow-hidden bg-gray-200"><ArrowLeftRight className="size-4" /></div>
                    <span>add</span>{" "}
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-sm">
                    <div className=" w-16 h-8 flex items-center justify-center rounded-full overflow-hidden bg-gray-200"><ArrowUp className="size-4" /></div>
                    <span>add</span>{" "}
                </div>
                <div className="flex flex-col gap-1 items-center justify-center text-sm">
                    <div className=" w-16 h-8 flex items-center justify-center rounded-full overflow-hidden bg-gray-200"><ArrowDown className="size-4" /></div>
                    <span>add</span>{" "}
                </div>
            </div>
        </>
    ); 
};

export default RewardPoints;
