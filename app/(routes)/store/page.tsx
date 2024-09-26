'use client'
import React from "react";


import VerticalSteps from "@/components/Bot/vertical-steps";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useTelegram } from "@/provider/telegram-provider";
import WebApp from "@twa-dev/sdk";
const steps = [
	{ title: "Step 1", description: "Description for step 1..." },
	{ title: "Step 2", description: "Description for step 2..." },
	{ title: "Step 3", description: "Description for step 3..." },
	{ title: "Ready!", description: "All steps completed." },
];
const BOT_USERNAME='open_guild_bot'
function redirectToTelegramChat(submissionId:string) {
	const encodedSubmissionId = encodeURIComponent(submissionId);
	// Encode the submission ID to ensure it's URL-safe


	// Construct the deep link URL to open the chat directly
	const deepLink = `tg://resolve?domain=${BOT_USERNAME}&start=${encodedSubmissionId}`;

	// Fallback URL for web clients
	const webFallback = `https://t.me/${BOT_USERNAME}?start=${encodedSubmissionId}`;

	// Try to open the Telegram app
	window.location.href = deepLink;

	// If the Telegram app doesn't open within 100ms, redirect to the web version
	setTimeout(() => {
		if (document.hidden) {
			return; // The app was opened
		}
		window.location.href = webFallback;
	}, 100);
}

const StorePage = () => {

	
	const handleTaskClick =async (taskId:any) => {
await	WebApp.sendData(JSON.stringify({ action: "start_task", taskId }));
};
	return (
		<div>
			<Button onClick={()=>handleTaskClick(1)}>open</Button>
			{/* <VerticalSteps steps={steps} /> */}
		</div>
	);
};

export default StorePage;
