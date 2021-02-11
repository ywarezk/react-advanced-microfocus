import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './todo/TodoList';
import { TodoCreate } from './todo/TodoCreate';

function App() {
  return (
    <div className="App">
		  <TodoCreate />
      <TodoList />
	  
	  
    </div>
  );
}

export default App;
