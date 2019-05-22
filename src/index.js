import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import appTodoReducer from './reducer';

import App from './App';

const store = createStore(appTodoReducer);

const render = () => {
	ReactDOM.render(<App store={store} {...store.getState()} />, document.querySelector('#root'));
};

store.subscribe(render);
render();
