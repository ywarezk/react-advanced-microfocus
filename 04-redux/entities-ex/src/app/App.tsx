import { useState } from 'react';
import './App.css';
import { Login } from '../user/Login';
import { TodoList } from '../todo/TodoList';

function App() {
	return (
		<div className="App">
				<Login />
				<TodoList />
		</div>
	);
}

export default App;
