import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ApiService } from "@/action/usefetch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader, Plus } from "lucide-react";
import { toast } from "sonner";

const platformAvatars = {
	youtube: "/youtube.svg",
	twitter: "/twitter.svg",
	discord: "/discord.svg",
	telegram: "/telegram.svg",
};

interface TaskProps {
	id: string;
	platform: "youtube" | "twitter" | "discord" | "telegram";
	task_name: string;
	amount: number;
	signature: string;
	comment: string | null;
	task_link: string;
	payer_id: string;
	status: string;
	endDate: string;
	createdAt: string;
	updatedAt: string;
}

interface TaskCardProps {
	task: TaskProps;
	webApp: any;
}
const TaskListCard = ({ task, webApp }:TaskCardProps) => {
	
	const submitTaskMutation = useMutation({
		mutationFn: () => ApiService.submitTask(task.id),
		onSuccess: (data) => {
			if (data?.status === 201) {
				toast.success("Submission created");
			} 
		},
		onError: (error) => {
			console.log("useMutatuion",{error})
			toast.error("Error occurred: " + error.message);
		},
	});

	const handleProofClick = () => {
		submitTaskMutation.mutate();
	};

	const avatarSrc = platformAvatars[task.platform] || "/default.svg";

	return (
		<div className="mx-2 flex items-center justify-center gap-2 border-b border-gray-200 py-2">
			<div>
				<Avatar className="size-8">
					<AvatarImage src={avatarSrc} alt={`${task.platform} avatar`} />
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
				<div onClick={handleProofClick} className="cursor-pointer">
					{submitTaskMutation.isPending ? (
						<Loader className="animate-spin h-4 w-4" />
					) : (
						"Proof"
					)}
				</div>
			</div>
		</div>
	);
};

export default TaskListCard;
