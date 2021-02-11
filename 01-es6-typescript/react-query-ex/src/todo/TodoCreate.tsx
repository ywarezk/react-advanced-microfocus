/**

this function when clicking a button will send a post request to create
a new todo item

 */

import { FC } from "react";
import { useMutation, useQueryClient  } from 'react-query';

 
export const TodoCreate: FC = () => {
	const queryClient = useQueryClient()
	
	const mutation = useMutation(async () => {
		const response = await fetch('http://nztodo.herokuapp.com/api/task/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: 'something' + Math.random(),
				description: 'something' + Math.random(),
				group: 'microfocus',
				when: (new Date()).toISOString()
			})
		});
		const task = await response.json();
		return task;
	}, {
		onSuccess: () => {
			queryClient.invalidateQueries('fetchTasks')
		}
	})
	
	/**
	 * we send the post request here
	 */
	const handleClick = () => {
		mutation.mutate();
	}
	
	return (
		<button onClick={handleClick}>
			click to create new item
		</button>
	)
}