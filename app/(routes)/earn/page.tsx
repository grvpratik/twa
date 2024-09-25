"use client";
import { ApiService } from "@/action/usefetch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTelegram } from "@/provider/telegram-provider";
import { useQuery } from "@tanstack/react-query";
import WebApp from "@twa-dev/sdk";
import { Loader, Plus } from "lucide-react";
import React, { useState } from "react";
import TaskListCard from "./components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const EarnPage = () => {
	const { webApp } = useTelegram();
	const [id, setId] = useState("");

	const { data, error, isLoading } = useQuery({
		queryKey: ["tasklists", id],
		queryFn: async () => ApiService.getTasks(),
		// Only run the query if initData is available)
	});

	if (isLoading)
		return (
			<div className=" w-full flex items-center justify-center h-screen gap-1">
				{" "}
				<Loader className="animate-spin h-8 w-8  " />
				Loading...
			</div>
		);
	if (error) return <div>Error occurred: {error.message}</div>;
	console.log({ data });
	return (
		<>
			<div className=" font-bold text-2xl p-2">Tasks</div>
			<div>
				<Tabs defaultValue="account" className="">
					<TabsList>
						<TabsTrigger value="account">Youtube</TabsTrigger>
						<TabsTrigger value="password">Twitter</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						
					</TabsContent>
					<TabsContent value="password">Change your password here.</TabsContent>
				</Tabs>
			</div>
			{data.map((data:any) => (
				<TaskListCard task={data} webApp={webApp} />
			))}
			{/* {data && <div>{JSON.stringify(data)}</div>} Display the response data */}
		</>
	);
};

export default EarnPage;
// import 'brainly-style-guide/src/sass/main.scss';
// import { Button } from 'brainly-style-guide';
// let notifications = [
// 	{
// 		name: "Payment received",
// 		description: "Magic UI",
// 		time: "15m ago",

// 		icon: "💸",
// 		color: "#00C9A7",
// 	},
// 	{
// 		name: "User signed up",
// 		description: "Magic UI",
// 		time: "10m ago",
// 		icon: "👤",
// 		color: "#FFB800",
// 	},
// 	{
// 		name: "New message",
// 		description: "Magic UI",
// 		time: "5m ago",
// 		icon: "💬",
// 		color: "#FF3D71",
// 	},
// 	{
// 		name: "New event",
// 		description: "Magic UI",
// 		time: "2m ago",
// 		icon: "🗞️",
// 		color: "#1E86FF",
// 	},
// ];

// notifications = Array.from({ length: 10 }, () => notifications).flat();

// const Notification = ({ name, description, icon, color, time }: any) => {
// 	return (
// 		<figure
// 			className={cn(
// 				"relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
// 				// animation styles
// 				"transition-all duration-200 ease-in-out hover:scale-[103%]",
// 				// light styles
// 				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
// 				// dark styles
// 				"transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
// 			)}
// 		>
// 			<div className="flex flex-row items-center gap-3">
// 				<div
// 					className="flex size-10 items-center justify-center rounded-2xl"
// 					style={{
// 						backgroundColor: color,
// 					}}
// 				>
// 					<span className="text-lg">{icon}</span>
// 				</div>
// 				<div className="flex flex-col overflow-hidden">
// 					<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
// 						<span className="text-sm sm:text-lg">{name}</span>
// 						<span className="mx-1">·</span>
// 						<span className="text-xs text-gray-500">{time}</span>
// 					</figcaption>
// 					<p className="text-sm font-normal dark:text-white/60">
// 						{description}
// 					</p>
// 				</div>
// 			</div>
// 		</figure>
// 	);
// };
{
	/* <ListCard />
			<div className="flex flex-col gap-2">
				{notifications.map((x, key) => (
					<Notification
						key={x.name}
						name={x.name}
						color={x.color}
						description={x.description}
						time={x.time}
					/>
				))}
			</div> */
}
