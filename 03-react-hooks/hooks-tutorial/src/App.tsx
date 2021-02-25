import React, { useReducer, useState } from 'react';
import './App.css';
// import { HelloWorld } from './02-use-effect/HelloWorld';
import { HelloWorld } from './04-use-context/HelloWorld';
import { isThrowStatement } from 'typescript';
import { StateContext } from './state/state.context';
import { Child } from './06-use-memo/Child';
import { TodoList } from './07-window/TodoList';

// {type: '', payload}
function reducer(oldData: any, action: any) {
	switch(action.type) {
		case 'SET_FIRST_NAME':
			return {
				...oldData,
				user: {
					...oldData.user,
					firstName: action.payload
				}
			} 
	}
}

function App() {
	console.log('App');
	
	const [isHelloShowing, setIsHelloShowing] = useState(true);
	
	/*
	const [data, dispatch] = useState({
		user: {
			firstName: 'Piglet',
			lastName: 'Chaitovski'
		},
		todo: {
			tasks: []
		},
		settings: {
			email: 'adsf@sdf.sdf'
		}
	})
	*/
	
	const [data, dispatch] = useReducer(reducer, {
		user: {
			firstName: 'Piglet',
			lastName: 'Chaitovski'
		},
		todo: {
			tasks: []
		},
		settings: {
			email: 'adsf@sdf.sdf'
		}
	})
	
	return (
		<StateContext.Provider value={ { data, dispatch} }>
			<div className="App">
				{
					/*
					isHelloShowing && (
						<HelloWorld msg="hello world" age={36} />		
					)
					*/
				}

				{/* <Theme.Provider> */}
				{/* <HelloWorld />

				<button onClick={() => setIsHelloShowing(!isHelloShowing)}>
					toggle hello world
				</button> */}
				
				<h1>App</h1>
				<Child />
				
				<TodoList />
			</div>
		</StateContext.Provider>
		
	);
}

export default App;
