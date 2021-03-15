import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { Task } from './todo.model';

const tasksEntityAdapter = createEntityAdapter();

export const fetchTasks = createAsyncThunk(
	'todo/fetchTasks',
	async (token: any) => {
		if (!token) return [];
		const response = await fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		const todoList = await response.json();
		return todoList;
	}
)

export const todoSlice = createSlice({
	name: 'todo',
	initialState: tasksEntityAdapter.getInitialState(),
	reducers: {
		
	},
	extraReducers: {
		[(fetchTasks.fulfilled as any)]: (state: any, action) => tasksEntityAdapter.setAll(state, action.payload)
	}
})


export const { selectAll } = tasksEntityAdapter.getSelectors((state: any) => state.todo);

// selectors
// selectors helps us extract data from redux
// the data can be derived
// performance

export const grabTaskAsInstance = createSelector(
	selectAll,
	// (state: any) => state.user.token, 
	(tasks) => {
		return tasks.map((task: any) => new Task(task));
	}
)

