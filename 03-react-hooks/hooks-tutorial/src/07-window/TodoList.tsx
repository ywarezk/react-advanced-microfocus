

import { FC, useEffect, useState } from 'react';

export const TodoList: FC = () => {
	const [todoList, setTodoList] = useState([]);
	
	useEffect(() => {
		fetch('http://nztodo.herokuapp.com/api/tasks/?format=json&limit=20&offset=2')
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				setTodoList(json);
			})
	}, [])
	
	return (
		<ul>
			{/* react-window */}
			{/* every li should be 20px height */}
			{/* the list height should 400px */}
			{
				todoList.map((singleTodo: any) => {
					return (
						<li key={singleTodo.id}>
							{singleTodo.title}
						</li>
					)
				})
			}
			<li>
			</li>
		</ul>
	)
	
}