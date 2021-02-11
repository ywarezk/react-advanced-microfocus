/**

Components in React
written in Typescript
how to?
best practices? 


 */

import { FC } from "react";
 
interface HelloWorldProps {
	msg?: string;
}
 
 
// {msg: '..'}
// // {}
const HelloWorld: FC<HelloWorldProps> = ( { 
	msg = 'hello world'
} ) => {
	return (
		<h1>
			{msg}
		</h1>
	)
}

/**


 */