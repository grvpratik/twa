"use client";
import { useTelegram } from "@/provider/telegram-provider";
import React from "react";

const ProfilePage = () => {
	const { user, webApp } = useTelegram();
	console.log({ user });
	return (
        <div className="h-[200vh]">
			<div className="flex flex-col px-4">
				<h1 className=" font-extrabold text-2xl my-2">Wallet</h1>
				<div className="flex  items-baseline"> <h3 className=" text-4xl font-extrabold">300</h3><span className=" font-semibold text-sm leading-none ">pts</span></div>
			</div>
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
