import { createContext } from 'react';

type ContextType = { token: string | null, setToken: (newMessage: string) => void };

// hello world
// <HelloContext.Provider>
export const TokenContext = createContext<ContextType>(
	{
		token: 'foo bar',
		setToken: () => null
	}
);