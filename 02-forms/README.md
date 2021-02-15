# Forms

In this lesson we will cover advanced forms with React

## Lesson Plan

- controlled
- uncontrolled
- custom hooks
- Formik
- custom form controls
- render props

## EX Login

In this EX. you will learn how JWT works in React application.
- Create a new application using `create-react-app`
- Create the following components (as functions)
  - `App`
  - `TodoList`
  - `Login`
- The `Login` will contain a form with an email field and a password field.
- Manage the form binding and validation using `Formik`
- The email and password should be sent to the following server

```
const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
```
- if you send the following data the server will return a JWT token.
- Pass that token to the `TodoList`, after getting the token the `TodoList` should fetch the data from the server:

```
fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(
				(response) => {
					return response.json()
				}
			)
			.then((json) => {
				setTodos(json);
			})
```
- the server will only return the data upon a valid jwt token





## EX.

Create a custom form control for the user to enter his phone number.  
The control will be made from 2 text inputs, one to enter the prefix and one to enter the number.  
The control will be created using `Formik` custom controls

```
<Formik
	onSubmit={handleSubmit}
	initialValues={{
		myPhone: {
			prefix: "123",
			phone: "12345678"
		}
	}}
>
	<Form>
		<PhoneField name="myPhone" />
		<button type="submit">Submit</button>
	</Form>
</Formik>
```