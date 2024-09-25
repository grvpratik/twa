"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { useTelegramTheme } from "@/provider/telegram-theme";
// import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Button } from "@telegram-apps/telegram-ui";
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
	const { setTheme } = useTheme();
	const telegramTheme = useTelegramTheme();
	const [userEnvironment, setUserEnvironment] = useState('loading');
	const router = useRouter();
	useEffect(() => {
		setTheme(telegramTheme);
		checkEnvironment();
	}, [telegramTheme]);

	const checkEnvironment = async () => {
		try {
			const WebApp = (await import('@twa-dev/sdk')).default;
			if (WebApp.initDataUnsafe.user) {
				setUserEnvironment('telegram');
				auth(WebApp.initData);
			} else {
				setUserEnvironment('external');
			}
		} catch (error) {
			console.log("Not in Telegram Web App environment");
			setUserEnvironment('external');
		}
	};

	const auth = async (initData: string) => {
		if (initData) {
			try {
				const response = await axios.post('http://localhost:8080/v1/user/auth/session', null, {
					headers: {
						Authorization: `tma ${initData}`
					}
				});
				console.log(response);
			} catch (error) {
				console.error("Authentication error:", error);
			}
		}
	};

	const renderContent = () => {
		switch (userEnvironment) {
			case 'loading':
				return <div>Loading...</div>;
			case 'telegram':
				return (
					<>
						<h1 className={cn('text-5xl font-extrabold text-balance my-4  shadow-2xl ',)}>
							Get <br /> Rewarded <br /> for your contribution
						</h1>
						<Button
							className={cn(
								'mx-3 font-medium py-2 group  relative overflow-hidden tracking-widest rounded-full ',
								// inter.className
							)}
							onClick={() => router.push('/home')}
						>
							Get Started
							{/* <div
								className={cn(
									"absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
								)}
							/> */}
						</Button>
					</>
				);
			case 'external':
				return (
					<>
						<h1 className='text-4xl font-bold text-balance my-4 text-center'>
							Welcome to Our App!
						</h1>
						<p className='mb-4 text-center'>
							For the best experience, please open this app in Telegram.
						</p>
						<Button
							className={cn(
								'bg-blue-500  transition  duration-150 font-medium tracking-widest rounded-full text-white',
								
							)}
						
						>
							<Link target="_blank" href='https://t.me/open_guild_bot/r3ward}'>Open in Telegram</Link>
						</Button>
					</>
				);
		}
	};

	return (<>
		<div className={cn('w-full h-screen p-4 flex flex-col justify-center items-center relative overflow-x-hidden',userEnvironment==='telegram' &&'justify-end items-stretch')}>
			{userEnvironment === 'external' && <ModeToggle />}
			{renderContent()}
		</div></>
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
//bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
