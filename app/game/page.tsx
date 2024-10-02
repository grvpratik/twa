// "use client";
// import React from "react";

// import { Stage, Layer, Rect } from "react-konva";

// const WIDTH = 100;
// const HEIGHT = 100;

// const grid = [
// 	["gray", "yellow"],
// 	["pink", "lime"],
// ];

// const GamePage = () => {
// 	const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });
// 	const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;
// 	const endX =
// 		Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;

// 	const startY =
// 		Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;
// 	const endY =
// 		Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

// 	const gridComponents = [];
// 	var i = 0;
// 	for (var x = startX; x < endX; x += WIDTH) {
// 		for (var y = startY; y < endY; y += HEIGHT) {
// 			if (i === 4) {
// 				i = 0;
// 			}

// 			const indexX = Math.abs(x / WIDTH) % grid.length;
// 			const indexY = Math.abs(y / HEIGHT) % grid[0].length;

// 			gridComponents.push(
// 				<Rect
// 					x={x}
// 					y={y}
// 					width={WIDTH}
// 					height={HEIGHT}
// 					fill={grid[indexX][indexY]}
// 					stroke="black"
// 				/>
// 			);
// 		}
// 	}
// 	return (
// 		<Stage
// 			x={stagePos.x}
// 			y={stagePos.y}
// 			width={window.innerWidth}
// 			height={window.innerHeight}
// 			draggable
// 			onDragEnd={(e) => {
// 				setStagePos(e.currentTarget.position());
// 			}}
// 		>
// 			<Layer>{gridComponents}</Layer>
// 		</Stage>
// 	);
// };

// export default GamePage;
"use client"
import React, { useRef, useEffect, useState, useCallback } from "react";

const CELL_SIZE = 50;
const COLORS = ["#e0e0e0", "#f0f0f0"];

interface Position {
	x: number;
	y: number;
}

interface GridObject extends Position {
	color: string;
}

const InfiniteGrid: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
	const [objects, setObjects] = useState<GridObject[]>([]);
	const [selectedObject, setSelectedObject] = useState<GridObject | null>(null);

	const drawGrid = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const startCol = Math.floor(offset.x / CELL_SIZE);
		const startRow = Math.floor(offset.y / CELL_SIZE);
		const endCol = startCol + Math.ceil(canvas.width / CELL_SIZE);
		const endRow = startRow + Math.ceil(canvas.height / CELL_SIZE);

		for (let col = startCol; col <= endCol; col++) {
			for (let row = startRow; row <= endRow; row++) {
				const x = col * CELL_SIZE - offset.x;
				const y = row * CELL_SIZE - offset.y;
				ctx.fillStyle = COLORS[(col + row) % 2];
				ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
			}
		}

		// Draw grid lines
		ctx.strokeStyle = "#ccc";
		ctx.lineWidth = 1;
		for (let x = -offset.x % CELL_SIZE; x < canvas.width; x += CELL_SIZE) {
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, canvas.height);
			ctx.stroke();
		}
		for (let y = -offset.y % CELL_SIZE; y < canvas.height; y += CELL_SIZE) {
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(canvas.width, y);
			ctx.stroke();
		}

		// Draw objects
		objects.forEach((obj) => {
			ctx.fillStyle = obj.color;
			ctx.fillRect(obj.x - offset.x, obj.y - offset.y, CELL_SIZE, CELL_SIZE);
		});
	}, [offset, objects]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			drawGrid();
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [drawGrid]);

	useEffect(() => {
		drawGrid();
	}, [drawGrid]);

	const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left + offset.x;
		const y = e.clientY - rect.top + offset.y;

		const clickedObject = objects.find(
			(obj) =>
				x >= obj.x &&
				x < obj.x + CELL_SIZE &&
				y >= obj.y &&
				y < obj.y + CELL_SIZE
		);

		if (clickedObject) {
			setSelectedObject(clickedObject);
		} else {
			setIsDragging(true);
			setDragStart({ x: e.clientX, y: e.clientY });
		}
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
		if (isDragging) {
			const dx = e.clientX - dragStart.x;
			const dy = e.clientY - dragStart.y;
			setOffset((prev) => ({
				x: prev.x - dx,
				y: prev.y - dy,
			}));
			setDragStart({ x: e.clientX, y: e.clientY });
		} else if (selectedObject) {
			const canvas = canvasRef.current;
			if (!canvas) return;

			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left + offset.x;
			const y = e.clientY - rect.top + offset.y;

			setObjects(
				objects.map((obj) =>
					obj === selectedObject
						? {
								...obj,
								x: Math.floor(x / CELL_SIZE) * CELL_SIZE,
								y: Math.floor(y / CELL_SIZE) * CELL_SIZE,
						  }
						: obj
				)
			);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		setSelectedObject(null);
	};

	const handleDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		const x = e.clientX - rect.left + offset.x;
		const y = e.clientY - rect.top + offset.y;

		const newObject: GridObject = {
			x: Math.floor(x / CELL_SIZE) * CELL_SIZE,
			y: Math.floor(y / CELL_SIZE) * CELL_SIZE,
			color: `hsl(${Math.random() * 360}, 100%, 50%)`,
		};

		setObjects([...objects, newObject]);
	};

	return (
		<canvas
			ref={canvasRef}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onDoubleClick={handleDoubleClick}
			style={{ cursor: isDragging ? "grabbing" : "grab" }}
		/>
	);
};

export default InfiniteGrid;