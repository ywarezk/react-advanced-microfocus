/**
 * useCallback example
 * useCallback is usually used when you need to pass a created callback around:
 *   - pass it to other components via props
     - pass it to other components via context
 */

import { FC, useEffect, useState, useCallback } from "react";



export const Parent: FC = () => {
	const [counter, setCounter] = useState(0);
	
	const handleCallback = useCallback(() => {
		setCounter(counter + 1);
	}, [  ])
	
	return (
		<Child cb={handleCallback} />	
	)
	
}

const Child: FC<{cb: () => void}> = ( { cb } ) => {
	
	useEffect(() => {
		cb();
	}, [ cb ])
	
	return (
		<button onClick={cb}>
			Child
		</button>
	)
}