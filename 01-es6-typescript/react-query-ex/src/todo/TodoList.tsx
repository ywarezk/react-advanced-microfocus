/**

this component will fetch the list of tasks from the server

and display them in a unordered list

 */

import { FC } from "react";
import { useQuery } from 'react-query';
import { Task } from "../entities/task.entity";

 
export const TodoList: FC = () => {
	const { data, error, isLoading } = useQuery<Task[]>('fetchTasks', async () => {
		const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json');
		const tasks = await response.json();
		return tasks;
	})
	
	return (
		<ul>
			{
				data?.map(task => (
					<li key={task.id}>{task.title}</li>
				))	
			}
		</ul>
	)
}