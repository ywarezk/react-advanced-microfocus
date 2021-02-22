import { FC, useEffect, useState } from 'react';

export const HelloWorld: FC = () => {
	
	const [name, setName] = useState<string | number>('Yariv');
	// const [name, setName] = useState([]);
	
	
	const [age] = useState<number>(
		() => {
			return 10;
		}
	);
	
	
	useEffect(() => {
		setName(10);
	}, []);
	
	
	
	// setName('hello')
	
	const handleClick = () => {
		setName((oldName) => {
			return oldName + 'new';
		})
	}
	
	return (
		<h1 onClick={handleClick}>
			hello world {name} {age}
		</h1>
	)
}