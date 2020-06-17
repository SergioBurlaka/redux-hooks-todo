import React from 'react';
import './App.css';
import ToDoInput from './toDoInput';
import ToDoList from './toDoList';

import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				main
				<ToDoInput />
				<ToDoList />
			</div>
		</Provider>
	);
}

export default App;
