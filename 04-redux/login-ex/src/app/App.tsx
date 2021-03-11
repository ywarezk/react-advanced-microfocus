import { useState } from 'react';
import './App.css';
import { Login } from '../user/Login';
import { TodoList } from '../todo/TodoList';
import { DisplayAmountTodo } from '../todo/DisplayAmountTodo';

function App() {
	return (
		<div className="App">
				<Login />
				<DisplayAmountTodo />
				<TodoList />
		</div>
	);
}

export default App;
