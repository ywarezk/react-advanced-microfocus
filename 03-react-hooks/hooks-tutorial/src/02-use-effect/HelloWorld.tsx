

import { FC, useEffect, useState } from 'react';

export const HelloWorld: FC<{msg: string, age: 36}> = ( {msg, age} ) => {
	const [ name ] = useState('yariv');
	
	const [counter, setCounter] = useState(0);
	
	// componentDidMount
	// componentDidUpdate
	useEffect(
		() => {
		
		}
	)
	
	useEffect(
		() => {
			// open something that needs to be cleaned
			// someVariable
			
			return () => {
				// someVariable
			}
		},
		[msg, name]
	)
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			/*
			setCounter((oldCounter) => {
				return oldCounter + Math.random();
			});
			*/
			
			setCounter(Math.random());
		}, 1000)
		
		return () => {
			clearInterval(intervalId);
		}
	}, [])
	
	return (
		<h1 onClick={() => {}}>
			hello world {counter}
		</h1>
	)
}

