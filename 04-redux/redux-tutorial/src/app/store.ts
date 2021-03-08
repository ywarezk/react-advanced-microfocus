/**
 * create a redux store to hold our state
 */
 
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../user/state/user.reducer';
import { userSlice } from '../user/state/user.slice';

/*
export const store = createStore(
	// reducer
	(state: any) => state,
	
	// state
	{
		user: {
			firstName: 'Piglet',
			lastName: 'Chaitovski',
			email: 'yariv@nerdeez.com'
		},
		todo: {
			tasks: [{ id: 1, title: 'hello' }],
			selectedTask: 1,
			isLoading: false
		}
	},
	
	// enhancers
)
*/

export const store = configureStore({
	reducer: {
		user: userSlice.reducer 
	},
	
	/*
	preloadedState: {
		user: {
			firstName: 'Piglet',
			lastName: 'Chaitovski',
			email: 'yariv@nerdeez.com'
		},
		todo: {
			tasks: [{ id: 1, title: 'hello' }],
			selectedTask: 1,
			isLoading: false
		}
	}
	*/
})

export type State = ReturnType<typeof store.getState>;