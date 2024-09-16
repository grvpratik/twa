"use client";
import { useTelegram } from "@/provider/telegram-provider";
import React from "react";

const ProfilePage = () => {
	const { user, webApp } = useTelegram();
	console.log({ user });
	return (
        <div className="h-[200vh]">
            
            <div className=" flex flex-col  w-full h-full px-4 ">
                <div className=" leading-none text-xl items-start justify-start font-bold py-2 px-2">Profile</div>
				<div className="flex gap-1 ">
					<div className=" relative size-14 overflow-hidden  rounded-md">
						<image
							href={
								""
							}
							height={48}
							width={48}
						/>
					</div>
					<div className="flex-1 flex-col flex gap-1">
						<div className=" font-semibold text-base">Name</div>
						<div className=" text-xs"> username</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
