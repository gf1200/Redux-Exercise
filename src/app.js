import React, { useState } from 'react';
import TodoList from './todoList';
import AddTodo from '../AddTodo';
import Footer from './Footer';

let nextToId = 0;

const TodoApp = ({ store, toDos, visibilityFilter }) => {
	const [inputState, setInputState] = useState('');

	const onInputChange = e => {
		setInputState(e.target.value);
	};

	const getVisibleToDos = (toDos, filter) => {
		switch (filter) {
			case 'SHOW_ALL':
				return toDos;
			case 'SHOW_ACTIVE':
				return toDos.filter(task => !task.completed);
			case 'SHOW_DONE':
				return toDos.filter(task => task.completed);
			default:
				return toDos;
		}
	};

	const visibleToDos = getVisibleToDos(toDos, visibilityFilter);

	return (
		<div>
			<h1>Too do's list:</h1>
			<AddTodo
				onAddClick={input =>
					store.dispatch({
						type: 'ADD_TODO',
						id: nextToId++,
						text: input
					})
				}
			/>
			<TodoList
				visibleToDos={visibleToDos}
				onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}
			/>
			<Footer store={store} currentFilter={visibilityFilter} />
		</div>
	);
};

export default TodoApp;
