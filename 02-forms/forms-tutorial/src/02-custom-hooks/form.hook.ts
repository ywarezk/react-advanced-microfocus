/**

Custom hooks 

are functions
their goal is to make us keep DRY rule

those functions can contain the repeating logic of the components
including useState, useEffect, etc.
including other custom hooks

 */

import { ChangeEvent, SyntheticEvent, useState } from "react";


 
 interface FormHook<T> {
	formValues: T;
	handleChange: (event: ChangeEvent<any>) => void;
	handleSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
 }
 
export function useForm<
	T = { [key: string]: any }
	>(initialState: T, onSubmit: (values: T) => void): FormHook<T> {
	const [formValues, setFormValues] = useState(initialState);

	const handleChange = (
		event: ChangeEvent<any>
	) => {
		setFormValues({
			...formValues,
			[event.currentTarget.name]: event.currentTarget.value
		})
	}
	
	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(formValues);
	}
	
	return {formValues, handleChange, handleSubmit};
}