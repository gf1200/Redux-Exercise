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

const { createStore, combineReducers } = Redux;
const { Component } = React;

const appTodo = combineReducers({
	toDos,
	visibilityFilter
});
const store = createStore(appTodo);

let nextToId = 0;

class TodoApp extends Component {
	render() {
		return (
			<div>
				<h1>Todos list:</h1>
				<input type='text' ref={node => (this.input = node)} />
				<button
					onClick={() => {
						store.dispatch({
							type: 'ADD_TODO',
							id: nextToId++,
							text: this.input.value
						});
						this.input.value = '';
					}}
				>
					Add task
				</button>
				<ul>
					{this.props.list.map(todo => (
						<li key={todo.id}>{todo.text}</li>
					))}
				</ul>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(<TodoApp list={store.getState().toDos} />, document.querySelector('#root'));
};

store.subscribe(render);
render();
