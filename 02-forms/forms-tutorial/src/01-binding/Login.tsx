/**

Login form
email
password

submit event im printing what the user entered

 */
 
import { FC, useState, SyntheticEvent, FormEvent } from 'react';

/**
 * 
 
 Controlled form by React
 
 */


export const Login: FC = () => {
	const [formValues, setFormValues] = useState({
		email: 'yariv@nerdeez.com',
		password: ''
	});
	
	const handleSubmit = (event) => {
		// print the values the user entered in the mail and password
		console.log(formValues);
		event.preventDefault();
	}
	
	const handleChange = (
		event: SyntheticEvent<HTMLInputElement>
	) => {
		setFormValues({
			...formValues,
			[event.currentTarget.name]: event.currentTarget.value
		})
	}
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			<input
				value={formValues.email}
				name="email"
				onChange={handleChange}
				type="email" placeholder="Enter your mail" />	
			<input 
				name="password"
				onChange={handleChange}
				value={formValues.password}
				type="password" placeholder="Enter your password" />	
			<button type="submit">
				Submit
			</button>
		</form>
	)
}