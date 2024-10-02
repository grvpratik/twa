"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	HomeSVG,
	StoreSVG,
	TaskSVG,
	ProfileSVG,
	WalletSVG,
} from "@/components/Bot/icon";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Home, PhoneCall, Settings, User } from "lucide-react";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	const navItems = [
		{ href: "/home", icon: HomeSVG, label: "Home" },
		{ href: "/store", icon: StoreSVG, label: "Store" },
		{ href: "/earn", icon: TaskSVG, label: "Task" },
		{ href: "/profile", icon: WalletSVG, label: "User" },
	];
	const TABS = [
		{
			label: "Home",
			icon: <Home className="h-5 w-5" />,
		},
		{
			label: "About",
			icon: <User className="h-5 w-5" />,
		},
		{
			label: "Services",
			icon: <Settings className="h-5 w-5" />,
		},
		{
			label: "Contact",
			icon: <PhoneCall className="h-5 w-5" />,
		},
	];
	return (
		<div className="w-full relative bg-background h-screen">
			{children}
			<div className="fixed bg-transparent    border-solid left-0 right-0 bottom-0 flex items-center h-16  px-4">
				<div className="flex justify-between  w-full space-x-2 rounded-xl border border-zinc-950/10 bg-gray-200 p-2">
					<AnimatedBackground
						defaultValue={TABS[0].label}
						className="rounded-lg bg-zinc-400"
						transition={{
							type: "spring",
							bounce: 0.2,
							duration: 0.3,
						}}
					>
						{TABS.map((tab) => (
							<button
								key={tab.label}
								data-id={tab.label}
								type="button"
								className="inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950"
							>
								{tab.icon}
							</button>
						))}
					</AnimatedBackground>
				</div>
			</div>
		</div>
	);
};

export default RoutesLayout;
