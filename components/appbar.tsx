"use client";

import dynamic from 'next/dynamic';

// Dynamically import wallet buttons with server-side rendering disabled
const WalletMultiButton = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);
const WalletDisconnectButton = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
    { ssr: false }
);

import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';
import axios from 'axios';

export const Appbar = ({token}:{token:string}) => {
    const { publicKey, signMessage } = useWallet();

    async function signAndSend() {
        if (!publicKey) {
            console.warn("No public key available for signing.");
            return;
        }

        try {
            const message = new TextEncoder().encode("Sign into mechanical turks");

            // Check if signMessage is available
            if (!signMessage) {
                console.error("SignMessage function is not available.");
                return;
            }

            const signature = await signMessage?.(message);
            if (!signature) {
                console.log("MESSAGE DECLINED")
            }
            console.log("Signature:", signature);
            console.log("Public Key:", publicKey.toString());

            // Make the API request to sign in
            const response = await axios.post(`http://localhost:8080/v1/payer/wallet`, {   
                signature,
                publicKey: publicKey?.toString()
            }, {
                headers: {
                    "Authorization": token
                }
            });
            if (response.status === 200) {
    console.log("successfully added")
}
            // Check if the response contains a token
            // if (response.data.token) {
            //     localStorage.setItem("token", response.data.token);
            //     console.log("Token saved to local storage.");
            // } else {
            //     console.error("No token received from the server.");
            // }

        } catch (error) {
            // Handle errors and log them
            if (axios.isAxiosError(error)) {
                console.error("API error:", error.response?.data || error.message);
            } else if (error instanceof Error) {
                console.error("Error:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    }

    useEffect(() => {
        if (publicKey) {
            signAndSend();
        }
    }, [publicKey]);

    return (
        <div className="flex justify-between border-b pb-2 pt-2">
            <div className="text-2xl pl-4 flex justify-center pt-3">
                Payer
            </div>
            <div className="text-xl pr-4 pb-2">
                {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
            </div>
        </div>
    );
}
