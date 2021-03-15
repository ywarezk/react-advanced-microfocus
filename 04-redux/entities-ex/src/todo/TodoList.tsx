import { FC, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './todo.slice';

export const TodoList: FC = () => {
	/**
	 * this should be a selector
	 */
	const todos = useSelector((state: any) => state.todo.tasks);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch])
	
	
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