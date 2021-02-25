/**
 * Example of useState, useState, useContext given in the 
 * copied from the login excersize
 */

export const hello = {}

/*

import { FC, useContext, useEffect, useState } from "react";
import { TokenContext } from "./hello.context";

interface Task {
	title: string;
	description: string;
	id: number;
}

export const TodoList: FC = () => {
	const { token } = useContext(TokenContext);
	const [ todos, setTodos ] = useState<Task[]>([]);
	
	useEffect(() => {
		
		if (!token) return;
		
		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(
			(response) => {
				return response.json()
			}
		)
		.then((json) => {
			setTodos(json);
		})
		
		
		
	}, [token])
	
	// fetch
	
	// setInterval
	
	return (
		<ul>
			{
				todos.map((singleTodo) => (
					<li key={singleTodo.id}>
						<h1>{singleTodo.title}</h1>
						<p>{ singleTodo.description}</p>
					</li>
				))
			}
		</ul>
	)
}

*/