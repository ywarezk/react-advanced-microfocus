/**
 * Read from redux
 * read the user firstName and lastName
 */
 
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../app';

export const Name: FC = () => {
	const user = useSelector((state: State) => state.user);
	
	return (
		<h1>
			{user.firstName} {user.lastName}
		</h1>
	)
}