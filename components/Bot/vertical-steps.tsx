'use client'
import React from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { ApiService } from "@/action/usefetch";
const steps = [
	{ title: "Complete task", description: "open the link" },
	{ title: "Make proof", description: "take a screenshot " },
	{ title: "Submission create", description: "create a submission" },
	{ title: "upload proof", description: "All steps completed." },
	{ title: "verify", description: "check if completed" },
];
const VerticalStep = ({ step, title, description, isLast }: any) => (
	

	
	<div className="flex">
		<div className="mr-4 flex flex-col items-center">
			<div>
				<div
					className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-900 ${
						isLast ? "bg-blue-900" : ""
					}`}
				>
					{isLast ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={18}
							height={18}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6 text-white dark:text-slate-200"
						>
							<path d="M5 12l5 5l10 -10" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6 text-blue-800 dark:text-slate-200"
						>
							<path d="M12 5l0 14" />
							<path d="M18 13l-6 6" />
							<path d="M6 13l6 6" />
						</svg>
						//<div>{step}</div>
					)}
				</div>
			</div>
			{!isLast && <div className="h-full w-px " />}
		</div>
		<div className="pt-1 pb-8">
			<p className="mb-2 text-lg font-bold text-gray-900 dark:text-slate-300">
				{title}
			</p>
			<p className="text-gray-600 dark:text-slate-400">{description}</p>
		</div>
	</div>
);

const VerticalSteps = ({ link }: any) => {
	// const { data, error, isLoading } = useQuery({
	// 	queryKey: ["tasklists", id],
	// 	queryFn: async () => ApiService.getTasks(),
	// 	// Only run the query if initData is available)
	// });
	return (
		<Drawer>
			<DrawerTrigger>
				<Button
					size={"sm"}
					className="leading-none text-sm rounded-full overflow-hidden"
				>
					Start
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<ScrollArea className="h-[80vh] overflow-y-auto">
					<div className="p-4 max-w-xl mx-auto ">
						<h2 className="font-heading  mb-8 text-3xl font-bold lg:text-4xl">
							Steps to recieve point
						</h2>
						{steps.map((step, index) => (
							<VerticalStep
								key={index}
								step={index + 1}
								title={step.title}
								description={step.description}
								isLast={index === steps.length - 1}
							/>
						))}
					</div>
				</ScrollArea>
			</DrawerContent>
		</Drawer>
	);
};

export default VerticalSteps;
