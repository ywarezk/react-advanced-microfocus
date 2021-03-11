/**
 * form with firstName and lastName
 * when submit change the name of the user
 */
 
import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { userSlice } from './state/user.slice';
// import { changeName } from './state/user.actions';

export const ChangeName: FC = () => {
	// store.dispatch
	// change the state in redux
	const dispatch = useDispatch();
	
	/**
	 * change redux state
	 * user: {firstName: new, lastName: new}
	 * @param values 
	 */
	const handleSubmit = (values: any) => {
		console.log(values);
		// { type: 'CHANGE_NAME', payload: {firstName:'', lastName:''}}
		
		console.log(userSlice.actions.changeName(values));
		dispatch( userSlice.actions.changeName(values) )
	}
	
	return (
		<Formik
			initialValues={ { firstName: 'Yariv', lastName: ''} }	
			onSubmit={ handleSubmit }
		>
			<Form>
				<Field type="text" name="firstName" placeholder="first name" />
				<Field type="text" name="lastName" placeholder="last name" />
				<button type="submit"> change name </button>
			</Form>
		</Formik>
	)
}