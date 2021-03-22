import { FC, useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { UserService } from './user.service';

const loginSchema = yup.object().shape({
	email: yup.string().email('Bad email format').required('this field is required'),
	password: yup.string().min(5, 'too short').max(100, 'too long').required('this field is required')
})


export const Login: FC = () => {
	const [token, setToken] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	
	const handleSubmit = async (values: any) => {
		const userService = new UserService();
		
		try {
			const token = await userService.login(values);
			setToken(token);
		} catch(err) {
			setError(err.message);
		}
	}

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={handleSubmit}
			validationSchema={loginSchema}
		>
			<Form>
				<Field type="email" name="email" placeholder="enter email" />
				<ErrorMessage name="email" component="h3" />
				<Field type="password" name="password" placeholder="enter password" />
				<ErrorMessage name="password" component="h3" />
				<button type="submit">
					Login
				</button>
				
				{
					token && (
						<h1>
							Login Worked!
						</h1>
					)
				}
				
				{
					error && (
						<h1>
							{error}
						</h1>
					)
				}
			</Form>
		</Formik>
	)
}