

import { FC, useEffect, useRef } from 'react';

export const CanvasExample: FC = () => {
	const canvas = useRef<HTMLCanvasElement | null>(null);
	
	useEffect(() => {
		if (!canvas) return;
		
		var ctx: any = (canvas.current as HTMLCanvasElement).getContext('2d');

		ctx.beginPath();
		ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
		ctx.moveTo(110, 75);
		ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
		ctx.moveTo(65, 65);
		ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
		ctx.moveTo(95, 65);
		ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
		ctx.stroke();
		
		
		
	}, [ canvas ])
	
	return (
		<div>
			<canvas ref={ canvas } width="200" height="200" style={{ border: "1px solid #000000"} }>
			
			</canvas>
		</div>
	)
} 