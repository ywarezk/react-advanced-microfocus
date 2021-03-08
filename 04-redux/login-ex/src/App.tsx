import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { TokenContext } from './hello.context';
import { TodoList } from './TodoList';
// import { Formik } from 'formik';
import { Formik } from './Formik/Formik';

function App() {
	const [token, setToken] = useState<string | null>(null);
	
	return (
		<div className="App">
				<Login />
				
				<TodoList />
			
			{/* <Formik   /> */}
		</div>
	);
}

export default App;
