import { FC, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TokenContext } from './hello.context';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
	email: yup.string().email('Bad email format').required('this field is required'),
	password: yup.string().min(5, 'too short').max(100, 'too long').required('this field is required')
})


export const Login: FC = () => {
	const { setToken } = useContext(TokenContext);
	
	const handleSubmit = async (values: any) => {
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const tokenObj = await response.json();
		setToken(tokenObj.token);
	}
	
	// return (
	// 	<Formik
	// 		initialValues={ {email: '', password: ''} }
	// 		onSubmit={handleSubmit}
	// 	>
	// 		( {handleSubmit, handleChange} ) => {
	// 			return (
	// 				<form onSubmit={handleSubmit}>
	// 					<input type="email" name="email" onChange={handleChange} />
	// 				</form>
	// 			)	
	// 		}	
	// 	</Formik>
	// )
	
	return (
		<Formik
			initialValues={ {email: '', password: ''} }
			onSubmit={handleSubmit}			
			validationSchema={loginSchema}
		>
			<Form>
				
				
				<Field type="email" name="email" placeholder="enter email" />
				<ErrorMessage name="email" />
				<Field type="password" name="password" placeholder="enter password" />
				<ErrorMessage name="password" />
				<button type="submit">
					Login
				</button>
			</Form>
		</Formik>
	)
}