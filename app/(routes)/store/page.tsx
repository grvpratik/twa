import React from "react";

import VerticalSteps from "@/components/Bot/vertical-steps";
const steps = [
	{ title: "Step 1", description: "Description for step 1..." },
	{ title: "Step 2", description: "Description for step 2..." },
	{ title: "Step 3", description: "Description for step 3..." },
	{ title: "Ready!", description: "All steps completed." },
];
const StorePage = () => {
	return (
		<div>
			{/* <VerticalSteps steps={steps} /> */}
		</div>
	);
};

export default StorePage;
