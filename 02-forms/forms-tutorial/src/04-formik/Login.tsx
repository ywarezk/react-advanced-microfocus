import { FC, useState } from "react";
import { Formik, Form, Field, FormikValues } from 'formik';

export const Login: FC = () => {
	
	const handleSubmit = (values: FormikValues) => {
		console.log(values);
	}
	
	return (
		<Formik
			initialValues={ {email: 'yariv@nerdeez.com', password: ''} }
			onSubmit={handleSubmit}
		>
			<Form>
				<Field 
					type="email"
					name="email"
				/>
				<Field
					type="password"
					name="password"
				/>
				<button type="submit">
					Submit
				</button>
			</Form>
		</Formik>
	)
}