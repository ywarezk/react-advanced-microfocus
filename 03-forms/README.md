# Forms

In this lesson we will cover advanced forms with React

## Lesson Plan

- controlled
- uncontrolled
- custom hooks
- Formik
- custom form controls
- render props

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