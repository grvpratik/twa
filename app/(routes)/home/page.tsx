// 'use client'
// import React, { useState } from "react";

// export default function DraggableLandscape() {
// 	const [position, setPosition] = useState({ x: 0, y: 0 });
// 	const [isDragging, setIsDragging] = useState(false);
// 	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

// 	const handleMouseDown = (e) => {
// 		setIsDragging(true);
// 		setDragStart({
// 			x: e.clientX - position.x,
// 			y: e.clientY - position.y,
// 		});
// 	};

// 	const handleMouseMove = (e) => {
// 		if (!isDragging) return;
// 		setPosition({
// 			x: e.clientX - dragStart.x,
// 			y: e.clientY - dragStart.y,
// 		});
// 	};

// 	const handleMouseUp = () => {
// 		setIsDragging(false);
// 	};

// 	return (
// 		<div
// 			className="w-full h-full  overflow-hidden bg-sky-200  cursor-grab "
// 			onMouseDown={handleMouseDown}
// 			onMouseMove={handleMouseMove}
// 			onMouseUp={handleMouseUp}
// 			onMouseLeave={handleMouseUp}
// 		>
// 			<svg
// 				width="1000"
// 				height="1000"
// 				viewBox="0 0 1000 1000"
// 				style={{
// 					transform: `translate(${position.x}px, ${position.y}px)`,
// 				}}
// 			>
// 				{/* Ground/Grass */}
// 				<path
// 					d="M0 300 Q 250 250, 500 300 T 1000 300 L 1000 1000 L 0 1000 Z"
// 					fill="#4ade80"
// 					className="drop-shadow-lg"
// 				/>

// 				{/* Caves */}
// 				<g>
// 					{/* Cave 1 */}
// 					<ellipse
// 						cx="200"
// 						cy="500"
// 						rx="50"
// 						ry="70"
// 						fill="#1f2937"
// 						className="drop-shadow-md"
// 					/>
// 					<path
// 						d="M 150 500 Q 200 580, 250 500"
// 						fill="none"
// 						stroke="#374151"
// 						strokeWidth="2"
// 					/>
// 				</g>

// 				<g>
// 					{/* Cave 2 */}
// 					<ellipse
// 						cx="500"
// 						cy="600"
// 						rx="60"
// 						ry="80"
// 						fill="#1f2937"
// 						className="drop-shadow-md"
// 					/>
// 					<path
// 						d="M 440 600 Q 500 690, 560 600"
// 						fill="none"
// 						stroke="#374151"
// 						strokeWidth="2"
// 					/>
// 				</g>

// 				<g>
// 					{/* Cave 3 */}
// 					<ellipse
// 						cx="800"
// 						cy="450"
// 						rx="55"
// 						ry="75"
// 						fill="#1f2937"
// 						className="drop-shadow-md"
// 					/>
// 					<path
// 						d="M 745 450 Q 800 535, 855 450"
// 						fill="none"
// 						stroke="#374151"
// 						strokeWidth="2"
// 					/>
// 				</g>

// 				{/* Random grass tufts */}
// 				{[...Array(20)].map((_, i) => (
// 					<path
// 						key={i}
// 						d={`M${100 + i * 45} ${350 + (i % 3) * 20} L${105 + i * 45} ${
// 							330 + (i % 3) * 20
// 						} L${110 + i * 45} ${350 + (i % 3) * 20}`}
// 						stroke="#16a34a"
// 						strokeWidth="2"
// 						fill="none"
// 					/>
// 				))}
// 			</svg>
// 		</div>
// 	);
// }
'use client'
import VerticalSteps from '@/components/Bot/vertical-steps'
import React from 'react'

const HomeRoute = () => {
  return (
	<div><VerticalSteps/></div>
  )
}

export default HomeRoute