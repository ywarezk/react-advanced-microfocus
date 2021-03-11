/**
display how many todo tasks we fetched from the server
 */
 
import { FC} from 'react';
import { useSelector } from 'react-redux';
import { Task } from './todo.model';
import { grabTaskAsInstance } from './todo.slice';

export const DisplayAmountTodo: FC = () => {
	const tasks = useSelector(grabTaskAsInstance);
	console.log('DisplayAmountTodo');
	
	return (
		<h1>
			Number of todo items in the state: 
		</h1>
	)
} 