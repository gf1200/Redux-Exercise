import React from 'react';
import TodoList from './TodoList';
import AddTodo from '../AddTodo';
import Footer from './Footer';

let nextToId = 0;

const App = ({ store, toDos, visibilityFilter }) => {
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
			<Footer
				onFilterClick={filter => store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter })}
				currentFilter={visibilityFilter}
			/>
		</div>
	);
};

export default App;
