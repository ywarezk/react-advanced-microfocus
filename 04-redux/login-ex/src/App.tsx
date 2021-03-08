import { useState } from 'react';
import './App.css';
import { Login } from './Login';
import { TodoList } from './TodoList';

function App() {
	return (
		<div className="App">
				<Login />
				
				<TodoList />
		</div>
	);
}

export default App;
