import { FC } from 'react';

export const Hello: FC<{ user?: {name: string}}> = ( { user } ) => {
	return (
		<h1>
			Hello { user ? user.name : 'Guest'}
		</h1>
	)
}