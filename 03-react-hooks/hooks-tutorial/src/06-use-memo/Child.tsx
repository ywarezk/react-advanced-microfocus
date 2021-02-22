

import { FC, useState } from 'react';
import { Grand } from './Grand';

/*
1. render -> updated VirtualDom
2. commit -> update the dom from the virtual dom
*/

export const Child: FC = () => {
	console.log('child');
	
	const [counter, setCounter] = useState(0);
	
	return (
		<>
			<h1 onClick={() => setCounter(counter + 1)}>
				Child {counter}
			</h1>
			<Grand />
		</>
	)
} 