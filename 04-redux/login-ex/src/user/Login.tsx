import { FC } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { userSlice, login } from './user.slice';

const loginSchema = yup.object().shape({
	email: yup.string().email('Bad email format').required('this field is required'),
	password: yup.string().min(5, 'too short').max(100, 'too long').required('this field is required')
})


export const Login: FC = () => {
	// store.dispatch
	const dispatch = useDispatch()
	
	const handleSubmit = async (values: any) => {		
		dispatch( login(values) );
	}
	
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