"use client"


import React from "react";
import Draggable from 'react-draggable'
const HomePageRoute = () => {



	React.useEffect(() => {
	  
	
		const data = JSON.stringify({
			eventType: 'web_app_setup_back_button',
			eventData: {
				is_visible: true,
			},
		});
	
		window.parent.postMessage(data, 'https://web.telegram.org');
	  return () => {
		
	  }
	}, [])
	
	return (
		<div>
			<Draggable>
				<div>I can now be moved around!</div>
			</Draggable>
		</div>
	);
};

export default HomePageRoute;
