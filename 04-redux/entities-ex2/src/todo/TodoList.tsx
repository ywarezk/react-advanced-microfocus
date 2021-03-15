import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectAll } from './todo.slice';


interface Task {
	title: string;
	description: string;
	id: number;
}

export const TodoList: FC = () => {
	const todos = useSelector(selectAll);
	const dispatch = useDispatch();
	
	const token = useSelector((state: any) => state.user.token);
	
	useEffect(() => {
		dispatch(fetchTasks(token));
	}, [token, dispatch])
	
	return (
		<div>
			<h1>Todo List</h1>
			<ul>
				{
					todos.map((singleTodo: any) => (
						<li key={singleTodo.id}>
							<h1>{singleTodo.title}</h1>
							<p>{singleTodo.description}</p>
						</li>
					))
				}
			</ul>
		</div>
		
	)
}