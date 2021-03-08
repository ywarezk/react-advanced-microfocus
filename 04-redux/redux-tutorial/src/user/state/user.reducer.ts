/**
 * given a certain action this is how the state will change
 
 (state, action) => newState 
 */

import { Action, AnyAction } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { changeName } from './user.actions';

// type UserActions = 

/*
export function userReducer(state = {
	firstName: 'Piglet',
	lastName: 'Chaitovski',
	email: 'yariv@nerdeez.com'
}, action: AnyAction ) {
	switch(action.type) {
		case 'CHANGE_NAME': 
			// state is immutable
			// state['firstName'] = 'sdfda'
			
			return {...state, firstName: action.payload.firstName, lastName: action.payload.lastName}
		default:
			return state;
	}
}
*/

export const userReducer = createReducer(
	{
		firstName: 'Piglet',
		lastName: 'Chaitovski',
		email: 'yariv@nerdeez.com'
	},
	{
		// CHANGE_NAME - better not duplicate the name
		// just import the action
		[changeName.toString()]: (state, action) => {
			state['firstName'] = action.payload.firstName;
			state['lastName'] = action.payload.lastName;
		}
	}
)