import { createAction } from '@reduxjs/toolkit';

/*
export function changeName(values: {firstName: string, lastName: string}) {
	return {
		type: 'CHANGE_NAME',
		payload: values
	}
}
*/

export const changeName = createAction<{ firstName: string, lastName: string }>(
	'CHANGE_NAME'
)