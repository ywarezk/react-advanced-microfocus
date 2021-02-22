
import { FC, useEffect, useState, useRef, MutableRefObject, forwardRef, createContext, useContext } from 'react';
import { StateContext } from '../state/state.context';

const Theme = createContext<{ colors: any } | null>(null)

export const HelloWorld: FC = () => {
	const { dispatch } = useContext<any>(StateContext);
	
	const handleClick = () => {
		dispatch(
			{ type: 'SET_FIRST_NAME', payload: 'Sweetness'}
		)
		
		/*
		dispatch(
			{
				...data,
				todo: {
					tasks: [...data.todo.tasks, 10]
				}
			}
		)
		*/
	}
	
	return (
		<>
			<h1 onClick={handleClick}>
				hello world
			</h1>
			<Theme.Provider value={ {
				colors: {
					black: '#27272'
				}
			} }>
				{/* <Child />
				<Child />
				<Grand /> */}
			</Theme.Provider>
			
		</>
	)
}