import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectAll } from './todo.slice';


interface Task {
	title: string;
	description: string;
	id: number;
}

/*
const [value, setValue] = useState(10)
const [value, setValue] = useState(() => {
	fetch X
})

setValue(20);
setValue((oldValue) => {
	fetch X
	newValue
})

useContext(Context)

useReducer((state, action) => {
	fetch X
}, initialState)

const fn = useCallback(() => {
	fetch V
}, [])

useMemo(() => {
	fetch X
}, [])


*/

export const TodoList: FC = () => {
	// const [ todos, setTodos ] = useState<Task[]>([]);
	const todos = useSelector(selectAll);
	// const todos: any = [];
	
	// const [isToken, setIsToken] = useState(false);
	const dispatch = useDispatch();
	
	const token = useSelector((state: any) => state.user.token);
	
	/*
	THE RENDER SHOULD REMAIN PURE
	if (token) {
		setIsToken(true);
	}
	*/
	
	useEffect(() => {
		dispatch(fetchTasks(token));
	}, [token])
	
	
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