/**
 * this slice will manage the part of the state: 
 {
	 user: {...}
 }
 */
 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// async actions
// example: actions that will send request to a server

export const login = createAsyncThunk<string, {email: string, password: string}>(
	'user/login',

	/**
	 * 
	 * @param credentials {email: '', password}
	 *
	 * {type: 'user/login', payload: 'sagfsafadf'}
	 */
	async (credentials) => {
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(credentials),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const { token } = await response.json();
		return token;
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		token: null
	},
	reducers: {
		
		/**
		 * 
		 * @param state 
		 * @param action = {type: 'user/setToken', payload: 'the jwt token'}
		 */
		setToken: (state, action) => {
			state['token'] = action.payload;	
		}
	},
	
	/**
	place your async action here
	 */
	extraReducers: {
		[(login.fulfilled as any)]: (state, action) => {
			state['token'] = action.payload;
		}
	}
})

