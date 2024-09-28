"use client";
import React from "react";

const steps = [
	{ title: "Step 1", description: "Description for step 1..." },
	{ title: "Step 2", description: "Description for step 2..." },
	{ title: "Step 3", description: "Description for step 3..." },
	{ title: "Ready!", description: "All steps completed." },
];
const BOT_USERNAME = "open_guild_bot";
// function redirectToTelegramChat(submissionId:string) {
// 	const encodedSubmissionId = encodeURIComponent(submissionId);
// 	// Encode the submission ID to ensure it's URL-safe

// 	// Construct the deep link URL to open the chat directly
// 	const deepLink = `tg://resolve?domain=${BOT_USERNAME}&start=${encodedSubmissionId}`;

// 	// Fallback URL for web clients
// 	const webFallback = `https://t.me/${BOT_USERNAME}?start=${encodedSubmissionId}`;

// 	// Try to open the Telegram app
// 	window.location.href = deepLink;

// 	// If the Telegram app doesn't open within 100ms, redirect to the web version
// 	setTimeout(() => {
// 		if (document.hidden) {
// 			return; // The app was opened
// 		}
// 		window.location.href = webFallback;
// 	}, 100);
// }

const StorePage = () => {
	// const handleTaskClick = async (taskId: any) => {
	// 	await WebApp.sendData(JSON.stringify({ action: "start_task", taskId }));
	// };
	return (
		<div>
		
		</div>
	);
};

export default StorePage;
