

import { createContext } from 'react';

interface State {
	user: {
		firstName: string;
		lastName: string;
	},
	todo: any;
	settings: any;	
}

export const StateContext = createContext<{ data: State, dispatch: any} | null>( null );