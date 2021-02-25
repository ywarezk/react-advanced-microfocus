

import { FC, useEffect, useCallback, useState } from 'react'; 



const ChildCb: FC<{ onOpen: () => void }> = ( { onOpen } ) => {
	
	useEffect(() => {
		console.log('some complex login when i get a new onOpen');	
	}, [onOpen])
	
	return (
		<h1>
			hello world
		</h1>
	)
	
}

const Parent: FC = () => {
	// const [something] = useSomething
	const [counter, setCounter] = useState(0);
	
	const handleOpen = useCallback(() => {
		setCounter(counter + 1);
	}, [ counter ])
	
	return (
		<ChildCb onOpen={handleOpen} />
	)
}