"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useTelegram } from "@/provider/telegram-provider"; // Assume this custom hook exists
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

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
            

            <div className="mb-2">
                <h4 className="text-xs leading-none font-semibold my-1 text-gray-700">
                 Balance
                </h4>
                <p className={cn("text-3xl font-semibold font-mono")}> ${data || 0}</p>
            </div>
           
        </>
    ); 
};

export default RewardPoints;
