import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../todo/todo.slice';


/**
 * 
 
 {
	 todo: {
		 tasks: []
	 }
 }
 
 
 */

export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer
	}
})