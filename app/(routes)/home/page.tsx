import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomePageRoute = () => {
	const data = JSON.stringify({
		eventType: 'web_app_setup_back_button',
		eventData: {
			is_visible: true,
		},
	});

	window.parent.postMessage(data, 'https://web.telegram.org');
	return (
		<div>
			<Tabs defaultValue="account" className="">
				<TabsList>
					<TabsTrigger value="account">Account</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
					
				</TabsList>
				<TabsContent value="account">
					Make changes to your account here.
				</TabsContent>
				<TabsContent value="password">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
};

export default HomePageRoute;
