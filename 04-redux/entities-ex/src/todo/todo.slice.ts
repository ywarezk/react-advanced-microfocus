import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * we can use createEntityAdapter to manage the array
 */

export const fetchTasks = createAsyncThunk(
	'todo/fetchTasks',
	async () => {
		const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json');
		const todoList = await response.json();
		return todoList;
	}
)

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		tasks: []
	},
	reducers: {
		
	},
	extraReducers: {
		[(fetchTasks.fulfilled as any)]: (state: any, action) => {
			state['tasks'] = action.payload;
		}
	}
})





