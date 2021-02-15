import { FC, SyntheticEvent, useState } from "react";
import { useForm } from "./form.hook";
import { Forms } from '../03-render-props/Forms';


export const Register: FC = () => {
	
	const {formValues, handleChange, handleSubmit} = useForm({
		email: 'yariv@nerdeez.com',
		password: '',
		repeat: ''
	}, (values) => {
		console.log(values);
	});
	
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={formValues.email}
				onChange={handleChange}
				name="email"
				type="email" placeholder="Enter your mail" />
			<input
				value={formValues.password}
				onChange={handleChange}
				name="password"
				type="password" placeholder="Enter your password" />
			<input
				value={formValues.repeat}
				onChange={handleChange}
				name="repeat"
				type="password" placeholder="Repeat your password" />
		</form>
	)
}


export const Register2: FC = () => {

	


	return (
		
		<Forms 
			initialValues={ {
				email: 'yariv@nerdeez.com',
				password: '',
				repeat: ''
			} }
			onSubmit={(values) => console.log(values)}
		>
			{
				(formValues, handleChange) => {
					return (
						<div>
							<input
								value={formValues.email}
								onChange={handleChange}
								name="email"
								type="email" placeholder="Enter your mail" />
							<input
								value={formValues.password}
								onChange={handleChange}
								name="password"
								type="password" placeholder="Enter your password" />
							<input
								value={formValues.repeat}
								onChange={handleChange}
								name="repeat"
								type="password" placeholder="Repeat your password" />
						</div>							
					)
				}
			}
		</Forms>
	)
}