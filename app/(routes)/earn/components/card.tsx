"use client";
import { ApiService } from "@/action/usefetch";
import VerticalSteps from "@/components/Bot/vertical-steps";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import React, { useState } from "react";
interface TaskProps {
	id: string;
	platform: 'youtube'| 'twitter'|'discord'|'telegram'; // e.g., "youtube", "twitter", etc.
	task_name: string; // e.g., "subscribe"
	amount: number; // e.g., 100
	signature: string; // Can be an empty string or a valid signature
	comment: string | null; // Can be a string or null
	task_link: string; // URL link to the task
	payer_id: string; // ID of the payer
	status: string; // e.g., "Hold", "Completed", etc.
	endDate: string; // ISO date string
	createdAt: string; // ISO date string
	updatedAt: string; // ISO date string
}
interface TaskCardProps{
    task: TaskProps;
    webApp:any
}
const platformAvatars = {
	youtube: "/youtube.svg",
	twitter: "/twitter.svg",
    discord: "/discord.svg",
    telegram:"/telegram.svg"
	// Add more platforms and their respective avatars here
};

const TaskListCard = ({ task, webApp }:TaskCardProps) => {
	const [id, setId] = useState(task.id);

	const { data, error, isLoading } = useQuery({
		queryKey: ["rewardPoints", id],
		queryFn: async () => ApiService.submitTask(id, webApp?.initData!),
		enabled: !!webApp?.initData && !!id,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error occurred: {error.message}</div>;
   
        const avatarSrc = platformAvatars[task.platform] || "/default.svg"; // Default avatar if platform not found
    
	return (
		<div className="mx-2 flex items-center justify-center gap-2 border-b border-gray-200 py-2">
			<div>
				<Avatar className="size-8">
					<AvatarImage  src={avatarSrc} alt={`${task.platform} avatar`} />
					<AvatarFallback>
						{task.platform.charAt(0).toUpperCase()}
					</AvatarFallback>
				</Avatar>
			</div>
			<div className="flex flex-col flex-1 text-sm gap-1">
				<span className="font-bold leading-none text-gray-800">
					{task.task_name}
				</span>
				<span className="leading-none flex font-semibold items-center text-green-600">
					<Plus className="size-3" /> {task.amount}
				</span>
			</div>
            <div>
                <VerticalSteps link={task.task_link} />
				
			</div>
		</div>
	);
};

export default TaskListCard;
