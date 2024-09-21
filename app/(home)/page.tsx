"use client";

import { useTheme } from "next-themes";

import React, { useEffect } from "react";

import ProfileForm from "@/components/form/create-post-form";
import { useTelegram } from "@/provider/telegram-provider";

import { useTelegramTheme } from "@/provider/telegram-theme";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Appbar } from "@/components/appbar";
import { Gamepad, HomeIcon, User, Workflow } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });
import { Inter } from 'next/font/google'
const HomePage = () => {
	const { user, webApp } = useTelegram();
	console.log(webApp);
	const { setTheme } = useTheme();
	const telegramTheme = useTelegramTheme();

	useEffect(() => {
		setTheme(telegramTheme);
	}, [telegramTheme]);

	return (
		<>
			{/* <div>
				home page <Link href={"/profile"}>profile</Link>
				<Link href={"/create"}>create</Link>
			</div> */}
			<div className=' w-full h-screen p-4 flex flex-col  justify-end relative  overflow-x-hidden'>

				<ModeToggle />
				<h1 className=' text-6xl font-extrabold  text-balance my-4   '>Get <br /> Rewarded <br /> for your contribution</h1>
				<Button className={cn('bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-medium tracking-widest rounded-full  text-white', inter.className)}>Get Started</Button>
			</div>
		</>
	);
};

export default HomePage;
// <div className=' mx-12 flex flex-col p-8'>

//   {/* {user ? (
//     <div>
//       <h1>Welcome {user?.username}</h1>
//       User data:
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//       Eniter Web App data:
//       <pre>{JSON.stringify(webApp, null, 2)}</pre>
//       <Button

//         className=' mx-5 p-2'
//       >
//         Action
//       </Button>
//     </div>
//   ) : (
//     <div>Make sure web app is opened from telegram client <Button

//     >
//       Action
//     </Button></div>
//   )}
//    </div>
