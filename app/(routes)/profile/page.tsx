
import RewardPoints from "@/components/Bot/balance";
import QuestCard from "@/components/Bot/card";
import EventTimeline from "@/components/Bot/event";
import { YoutubeSVG } from "@/components/Bot/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
const ProfilePage =  () => {
	
	// const response = await axios.get('http://localhost:8080/v1/user/task');
	// const res = response.data.tasks;

	// const getIconComponent = (platformName:string) => {
	// 	switch (platformName) {
	// 		case 'Twitter':
	// 			return Bird; // Return the component function
	// 		case 'YouTube':
	// 			return YoutubeSVG; // Return the component function
	// 		case 'Telegram':
	// 			return TargetIcon; // Return the component function
	// 		case 'Discord':
	// 			return DiscIcon; // Return the component function
	// 		default:
	// 			return null; // Handle unrecognized platforms
	// 	}
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
	//};

	return (
		<div className="h-full p-4 flex flex-col gap-2">
			<RewardPoints/>

			<Tabs defaultValue="account" className="w-full">
				<TabsList className="w-full ">
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Transations</TabsTrigger>

				</TabsList>
				<TabsContent value="account">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
};

export default ProfilePage;




























			{/* <EventTimeline events={events} /> */}
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

