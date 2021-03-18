// /

import { useState, lazy, Suspense } from "react";
// import SomethingBig from "../components/SomethingBig";
import dynamic from 'next/dynamic'

const LazySomethingBig = dynamic(
	async () => {
		// Promise<{ default: function SomethingBig(){...} }>
		const module = await import('../components/SomethingBig');
		return module.default as any;
	}
)

export default function Home() {
	const [isShowing, setIsShowing] = useState(false);
	
	const handleClick = () => {
		setIsShowing(!isShowing);
	}
	
	return (
		<div>
			<h1>
				hello im in the homepage
			</h1>
			<button onClick={handleClick}>
				toggle something big
			</button>
			{/* this is lazy loading when not using nextjs */}
			
{/* 			
			<Suspense fallback={<h1>Loading...</h1>}>
			
			{
				isShowing && <LazySomethingBig />
			}
			</Suspense> */}
			
			{
				isShowing && <LazySomethingBig />
			}
		</div>
		
	)
}