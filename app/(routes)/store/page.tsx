'use client'
import React, { useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

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

	return (
		<div>
			<h1>Solana Phantom Wallet Connection</h1>
			{walletAddress ? (
				<p>Connected: {walletAddress}</p>
			) : (
				<button onClick={connectWallet}>Connect Phantom Wallet</button>
			)}
		</div>
	);
};

export default StorePage;

// const dappEncryptionPublicKey = "";
// const appUrl = encodeURIComponent("https://your-app-url.com");
// 	const phantomDeepLink = `https://phantom.app/ul/v1/connect?app_url=${appUrl}
// 			&dapp_encryption_public_key=${dappEncryptionPublicKey}`;
