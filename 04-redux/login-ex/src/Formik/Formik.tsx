import { FC, ReactElement, createContext, useState, useReducer, useEffect } from "react";

const FormikContext = createContext(null);

interface FormikProps {
	initialValues?: any;
	onSubmit?: (values: any) => void;
	children?: ReactElement
}

function reducer(someComplexState: any, action: any) {
	switch(action.type) {
		case 'hello':
			return {...someComplexState, message: action.payload}
		default:
			return someComplexState
	}
}

export const Formik: FC<FormikProps> = () => {
	const [counter, setCounter] = useState(0);
	
	// const [someComplexState, setSomeComplexState] = useState({
	// 	dirty: false,
	// 	errors: {},
	//  message: ''
	// 	// ...
	// })
	
	// dispatch( { type: 'some action', payload: data that is needed to change the state } )
	const [someComplexState, dispatch] = useReducer(reducer, {
		message: 'foo bar'
	});
	
	// you will use useReducer
	// state is complex
	// if to change the state we need the previous state
	// 
	
	const handleChange = () => {
		dispatch({type: 'hello', payload: 'hello world'});
	}
	
	useEffect(() => {
		
		setInterval(() => {
			
			setCounter((previousCounter) => {
				return previousCounter + 1;
			});
			
		}, 1000);
		
	}, [])
	
	return (
		<FormikContext.Provider value={someComplexState}>
			<h1>
				{ counter }
			</h1>
		</FormikContext.Provider>
	)
	
}