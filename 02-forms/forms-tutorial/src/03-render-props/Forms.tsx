/**

Render Props

repeating logic in component that prevents us from keeping DRY

the repeating logic involves jsx stuff as well

<Forms 
/>



<Forms 
	initialValues={}
	onSubmit={() => null}
	
	render={( formValues, handleChange, handleSubmit ) => {
		return (
			<form>
				
			</form>
		)
	}}
>
	{
		(formValues, handleChange, handleSubmit ) => {
			return (
				<form>

				</form>
			)
		}
	}

</Forms>

handleChange
handleSubmit
formValues


<Stam>
	<div></div>
</Stam>

 */

import { ChangeEvent, FC, ReactElement, SyntheticEvent, useState } from "react";

interface FormsProps<T> {
	initialValues: T;
	onSubmit: (values: T) => void;
	children: (formValues: T, handleChange: any) => ReactElement
}
 
export const Forms: FC<FormsProps<any>> = ({
	initialValues,
	onSubmit,
	children
}) => {
	
	const [formValues, setFormValues] = useState(initialValues);

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
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			{children(formValues, handleChange)}
		</form>	
	)
	
}