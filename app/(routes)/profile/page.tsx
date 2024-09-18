"use client";
import QuestCard from "@/components/Bot/card";
import EventTimeline from "@/components/Bot/event";
import { YoutubeSVG } from "@/components/Bot/icon";
import { useTelegram } from "@/provider/telegram-provider";
import axios from "axios";
import { Bird, DiscIcon, TableRowsSplit, TargetIcon } from "lucide-react";
import React from "react";
const events = [
	{
		datetime: "10:03",
		time: "10:03",
		title: "Bat & Ball",
		description: "On time"
	}, {
		datetime: "10:03",
		time: "10:03",
		title: "Bat & Ball",
		description: "On time"
	}, {
		datetime: "10:03",
		time: "10:03",
		title: "Bat & Ball",
		description: "lorem fafkagklorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjglorem fafkagkdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjgdfgdkggkjgir  uhg foafi a iwia i aws sd fas df aif aidfjf jaifjif jir ffjjg"
	}, {
		datetime: "10:03",
		time: "10:03",
		title: "Bat & Ball",
		description: "On time"
	},
	// ... more events
];
const ProfilePage = async () => {
	const { user, webApp } = useTelegram();
	// const response = await axios.get('http://localhost:8080/v1/user/task');
	// const res = response.data.tasks;

	const getIconComponent = (platformName:string) => {
		switch (platformName) {
			case 'Twitter':
				return Bird; // Return the component function
			case 'YouTube':
				return YoutubeSVG; // Return the component function
			case 'Telegram':
				return TargetIcon; // Return the component function
			case 'Discord':
				return DiscIcon; // Return the component function
			default:
				return null; // Handle unrecognized platforms
		}
	};

	return (
		<div className="h-[200vh]">
			<div className="flex flex-col px-4">
				<h1 className="font-extrabold text-2xl my-2">Wallet</h1>
				<div className="flex items-baseline">
					<h3 className="text-4xl font-extrabold">300</h3>
					<span className="font-semibold text-sm leading-none">pts</span>
				</div>
			</div>
			<div className="p-4">
				{/* {res.map((data:any) => {
					const IconComponent = getIconComponent(data.platform); // Get the component function
					return (
						<QuestCard
							key={data.id}
							title={data.task_name}
							points="1000"
							Icon={IconComponent} // Pass the component function
						/>
					);
				})} */}
			</div>


			<EventTimeline events={events} />
			{/* <div className=" flex flex-col  w-full h-full px-4 ">
                <div className=" leading-none text-xl items-start justify-start font-bold py-2 px-2">Profile</div>
				<div className="flex gap-1 ">
					<div className=" relative size-14 overflow-hidden bg-sky-700  rounded-md">
						
					</div>
					<div className="flex-1 flex-col flex gap-1">
						<div className=" font-semibold text-base">Name</div>
						<div className=" text-xs"> username</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default ProfilePage;
