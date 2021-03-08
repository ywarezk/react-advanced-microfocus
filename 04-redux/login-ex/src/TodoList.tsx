import { FC, useState } from "react";

interface Task {
	title: string;
	description: string;
	id: number;
}

export const TodoList: FC = () => {
	const [ todos, setTodos ] = useState<Task[]>([]);
	
	/*
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
	*/
	
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