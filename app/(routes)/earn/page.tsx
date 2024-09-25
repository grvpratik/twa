'use client'
import { ApiService } from "@/action/usefetch";
import { useTelegram } from "@/provider/telegram-provider";
import { useQuery } from "@tanstack/react-query";
import WebApp from "@twa-dev/sdk";
import React, { useState } from "react";
const list = [
	{
		"id": "23221141-f396-451e-b075-fe544b2c201e",
		"platform": "youtube",
		"task_name": "subscribe",
		"amount": 50,
		"signature": "5DrSMqE86SX5MHmpkyAKnFxuNgWvTn98hW6u6W8djXnZe3YK15M9KLVtRzRKXBex6FKqLN12HfwiVKww4sbQtmrN",
		"comment": null,
		"task_link": "https://youtube.com/pratik",
		"payer_id": "d484b806-1c30-4c0a-a444-09f4739dd48d",
		"status": "Active",
		"endDate": "2024-09-21T11:55:31.824Z",
		"createdAt": "2024-09-21T11:55:31.825Z",
		"updatedAt": "2024-09-21T11:56:52.345Z"
	},
	{
		"id": "a35002f9-3e09-46c3-b224-1da1d26ef98e",
		"platform": "twitter",
		"task_name": "follow",
		"amount": 100,
		"signature": "",
		"comment": null,
		"task_link": "Https://twitter.com/bokucollab",
		"payer_id": "d484b806-1c30-4c0a-a444-09f4739dd48d",
		"status": "Hold",
		"endDate": "2024-09-22T07:55:51.191Z",
		"createdAt": "2024-09-22T07:55:51.193Z",
		"updatedAt": "2024-09-22T07:55:51.193Z"
	},
	{
		"id": "d5f6bd8f-5493-467a-98d2-f4fb4614e545",
		"platform": "discord",
		"task_name": "join",
		"amount": 100,
		"signature": "",
		"comment": null,
		"task_link": "https://discord.gg/rer",
		"payer_id": "d484b806-1c30-4c0a-a444-09f4739dd48d",
		"status": "Hold",
		"endDate": "2024-09-23T17:26:45.434Z",
		"createdAt": "2024-09-23T17:26:45.435Z",
		"updatedAt": "2024-09-23T17:26:45.435Z"
	},
	{
		"id": "425c1b05-ac4d-4865-bff9-d0e3790411a2",
		"platform": "youtube",
		"task_name": "subscribe",
		"amount": 100,
		"signature": "",
		"comment": null,
		"task_link": "https://youtube.com/fr",
		"payer_id": "d484b806-1c30-4c0a-a444-09f4739dd48d",
		"status": "Hold",
		"endDate": "2024-09-23T18:16:33.392Z",
		"createdAt": "2024-09-23T18:16:33.394Z",
		"updatedAt": "2024-09-23T18:16:33.394Z"
	}
]


const EarnPage = () => {
	const [id, setId] = useState('')
	const { webApp } = useTelegram()
const { data, error, isLoading } = useQuery({
			queryKey: ['rewardPoints',id],
			queryFn: async () => ApiService.submitTask(id, webApp?.initData!) ,
			enabled: !!webApp?.initData && !!id, // Only run the query if initData is available)
		})
	
console.log({data})
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error occurred: {error.message}</div>;

	return (
		<>
			{list.map((data) => (
				<div key={data.id} className="w-full p-2 py-4 text-xl rounded-lg bg-lime-300 my-2" onClick={() => setId(data.id!)}>
					{data.task_name}
				</div>
			))}
			{data && <div>{JSON.stringify(data)}</div>} {/* Display the response data */}
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
{/* <ListCard />
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
			</div> */}