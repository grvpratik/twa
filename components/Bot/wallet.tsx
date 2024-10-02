import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function CryptoWallet() {
	return (
		<div className="bg-background text-foreground max-w-md mx-auto">
			{/* Total Balance Section */}
			<div className="mb-6 flex justify-center items-center flex-col">
				<p className="text-gray-400 text-sm mb-1">Total Balance</p>
				<h1 className="text-3xl font-bold">$ 4,324.50</h1>
			</div>

			{/* Stake Balance Card */}
			<Card className="bg-gray-900 border-gray-800 mb-4">
				<CardContent className="p-3 flex justify-between items-center">
					<span className="text-gray-400">Stake Balance</span>
					<span className="font-semibold">$ 90.69</span>
				</CardContent>
			</Card>

			{/* Action Buttons */}
			<div className="flex gap-3 mb-6">
				<Button className="flex-1 bg-blue-500 hover:bg-blue-600">
					<Plus className="mr-2 h-4 w-4" />
					Deposit
				</Button>
				<Button
					variant="secondary"
					className="flex-1 bg-gray-800 hover:bg-gray-700"
				>
					<ArrowUpRight className="mr-2 h-4 w-4" />
					Stake
				</Button>
				<Button
					variant="secondary"
					className="flex-1 bg-gray-800 hover:bg-gray-700"
				>
					<ArrowDownRight className="mr-2 h-4 w-4" />
					Unstake
				</Button>
			</div>

			{/* Crypto Assets List */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Avatar className="h-8 w-8 bg-purple-700">
							<span className="text-xs">🌌</span>
						</Avatar>
						<div className="ml-3">
							<p className="font-medium">TON Space Beta</p>
							<p className="text-xs text-gray-400">ex0egoskanss..97sgsvas</p>
						</div>
					</div>
					<span className="font-medium">$1.50</span>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Avatar className="h-8 w-8 bg-blue-500">
							<span>T</span>
						</Avatar>
						<div className="ml-3">
							<p className="font-medium">Toncoin</p>
							<p className="text-xs text-gray-400">0.00255938283 TON</p>
						</div>
					</div>
					<span className="font-medium">$0.50</span>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Avatar className="h-8 w-8 bg-orange-500">
							<span>₿</span>
						</Avatar>
						<div className="ml-3">
							<p className="font-medium">Bitcoin</p>
							<p className="text-xs text-gray-400">0.00 BTC</p>
						</div>
					</div>
					<span className="font-medium">$0.00</span>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Avatar className="h-8 w-8 bg-green-500">
							<span>$</span>
						</Avatar>
						<div className="ml-3">
							<p className="font-medium">Dollars</p>
							<p className="text-xs text-gray-400">$0.00 USDT</p>
						</div>
					</div>
					<span className="font-medium">$0.00</span>
				</div>
			</div>

			{/* Recent Activity Section */}
			<div className="mt-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="font-semibold">Recent Activity</h2>
					<Select defaultValue="this-week">
						<SelectTrigger className="w-32 bg-gray-800 border-gray-700">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="this-week">This week</SelectItem>
							<SelectItem value="this-month">This month</SelectItem>
							<SelectItem value="all-time">All time</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
								<Plus className="h-4 w-4" />
							</div>
							<div>
								<p className="font-medium">Deposit BTC/TON</p>
								<p className="text-xs text-gray-400">Today at 08:30 AM</p>
							</div>
						</div>
						<div className="text-right">
							<p className="text-green-500">+0.000012300 BTC</p>
							<p className="text-xs text-gray-400">+$200.00</p>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
								<ArrowUpRight className="h-4 w-4" />
							</div>
							<div>
								<p className="font-medium">Send #19213</p>
								<p className="text-xs text-gray-400">0.10 USDC</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
