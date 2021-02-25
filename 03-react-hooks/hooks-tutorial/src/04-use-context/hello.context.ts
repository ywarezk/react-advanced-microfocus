/**
 * this is another example of context copied from the second lesson
 * about forms.
 *
 * Context is used to share information between a subtree of components.
 */

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