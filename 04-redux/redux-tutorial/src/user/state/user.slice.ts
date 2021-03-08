/**
 slice
 RTK
 slice = { reducer: userReducer, actions: {changeName} }
 */
 
 import { createSlice } from '@reduxjs/toolkit';
 
 // slice = reducer + actions
 export const userSlice = createSlice({
	name: 'user',
	initialState: {
		 firstName: 'Piglet',
		 lastName: 'Chaitovski',
		 email: 'yariv@nerdeez.com'
	},
	reducers: {
		changeName: (state, action) => {
			state['firstName'] = action.payload.firstName;
			state['lastName'] = action.payload.lastName;
		}
	}
 });