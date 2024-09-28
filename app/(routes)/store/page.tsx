'use client'
import React, { useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Button } from "@/components/ui/button";

const StorePage = () => {
	const [walletAddress, setWalletAddress] = useState(null);

	const connectWallet = async () => {
		if (window.solana) {
			try {
				const response = await window.solana.connect();
				setWalletAddress(response.publicKey.toString());
			} catch (err) {
				console.error(err);
			}
		} else {
			alert("Phantom wallet not found! Please install it.");
		}
	};
	const BOT_USERNAME='open_guild_bot'
function redirectToTelegramChat(submissionId: string) {
	const encodedSubmissionId = encodeURIComponent(submissionId);
	// Encode the submission ID to ensure it's URL-safe
	// Construct the deep link URL to open the chat directly
	const webFallback = `https://t.me/${BOT_USERNAME}`;
	const deepLink = `https://phantom.app/ul/v1/connect?app_url=${encodeURIComponent(
		"https://aphanfts.app/"
	)}&dapp_encryption_public_key=CfK99Zo6zcpiZMDTveXYTEJXouvrNd2cKw9C1yVQSNAR&redirect_link=${webFallback}&cluster=devnet`;
	// Fallback URL for web clients
	
	// Try to open the Telegram app
	// window.location.href = deepLink;
	// If the Telegram app doesn't open within 100ms, redirect to the web version
	setTimeout(() => {
		if (document.hidden) {
			return; // The app was opened
		}
		window.location.href = webFallback;
	}, 100);
}

	return (
		<>
			<div>
				<h1>Solana Phantom Wallet Connection</h1>
				{walletAddress ? (
					<p>Connected: {walletAddress}</p>
				) : (
					<button onClick={connectWallet}>Connect Phantom Wallet</button>
				)}
			</div>

			<Button onClick={() => redirectToTelegramChat("hii")}>open</Button>
		</>
	);
};

export default StorePage;

// const dappEncryptionPublicKey = "";
// const appUrl = encodeURIComponent("https://your-app-url.com");
// 	const phantomDeepLink = `https://phantom.app/ul/v1/connect?app_url=${appUrl}
// 			&dapp_encryption_public_key=${dappEncryptionPublicKey}`;
