import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from '@reduxjs/toolkit';

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



