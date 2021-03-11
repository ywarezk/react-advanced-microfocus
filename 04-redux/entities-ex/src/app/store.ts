import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../todo/todo.slice';
import { userSlice } from '../user/user.slice';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		todo: todoSlice.reducer
	}
})