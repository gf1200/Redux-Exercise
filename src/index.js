import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import todoReducer from './reducer';
import TodoApp from './app';

const store = createStore(todoReducer);

const render = () => {
	ReactDOM.render(
		<TodoApp store={store} list={store.getState().toDos} />,
		document.querySelector('#root')
	);
};

store.subscribe(render);
render();
