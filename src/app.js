import React, { useState } from 'react';

let nextToId = 0;

const TodoApp = ({ store, list }) => {
	const [inputState, setInputState] = useState('');

	const onInputChange = e => {
		setInputState(e.target.value);
	};

	return (
		<div>
			<h1>Todos list:</h1>
			<input type='text' value={inputState} onChange={onInputChange.bind(null)} />
			<button
				onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						id: nextToId++,
						text: inputState
					});
					setInputState('');
				}}
			>
				Add task
			</button>
			<ul>
				{list.map(todo => (
					<li
						key={todo.id}
						onClick={() => store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
						style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
					>
						{todo.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoApp;
