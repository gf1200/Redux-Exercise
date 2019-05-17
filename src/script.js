import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import TodoApp from './app';

const toDo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) return state;
			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

const toDos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, toDo(undefined, action)];
		case 'TOGGLE_TODO':
			return state.map(todo => toDo(todo, action));

		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

const appTodo = combineReducers({
	toDos,
	visibilityFilter
});

const store = createStore(appTodo);

const render = () => {
	ReactDOM.render(
		<TodoApp store={store} list={store.getState().toDos} />,
		document.querySelector('#root')
	);
};

store.subscribe(render);
render();
