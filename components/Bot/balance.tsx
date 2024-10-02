"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useTelegram } from "@/provider/telegram-provider"; // Assume this custom hook exists
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import { Anton } from "next/font/google";
const anton = Anton({  weight:"400",subsets:["latin"]});
const fetchRewardPoints = async () => {
    
    const response = await axios.post(
			`${process.env.NEXT_PUBLIC_URL}/v1/user/me`,
			
		);
    return response.data.points;
};

const RewardPoints = () => {
  
    const { isLoading, error, data, isFetching } = useQuery({
        queryKey: ["rewardPoints"],
        queryFn: async () => fetchRewardPoints(),
     
    });

    if (isLoading || isFetching) return <div>Loading reward points...</div>;
    if (error) return <div>Error fetching reward points: {error.message}</div>;

    return (
			<>
				<div className="mb-2  p-2 rounded">
					<h4 className="text-xs leading-none font-semibold my-1 text-gray-700  ">
						Balance
					</h4>
					<p
						className={cn("text-3xl font-semibold ", anton.className)}
					>
						{" "}
						{data || 0}
					</p>
				</div>
			</>
		); 
};

export default RewardPoints;
