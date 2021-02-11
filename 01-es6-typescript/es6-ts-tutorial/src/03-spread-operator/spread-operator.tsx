/**

const arr = [1,2,3,4,5];
const arr2 = [...arr, 10, 20];

const myObj = {a: '', b: 10}
const myObj2 = {...myObj, a: 42, c: 'hello world'}

// hello(1,10,'hello')
function hello(...args) {
	
}

{
	user: {
		todo: []
	}
}


 */

import { FC, ButtonHTMLAttributes } from "react";

interface HelloWorldProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	msg: string;
}
 
const HelloWorld: FC<HelloWorldProps> = ({
	msg,
	// {onClick, id ...}
	...buttonProps
}) => {
	return (
		<div>
			<h1>
				hello world
			</h1>
			{/*  
				{onClick: () => void}  
				<button onClick={}
			*/}
			<button {...buttonProps}>
				some button
			</button>
		</div>
	)
}