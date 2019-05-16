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
			return [...state, todo(state, action)];
		case 'TOGGLE_TODO':
			return state.map(todo => toDo(todo, action));

		default:
			return state;
	}
};

//TESTS

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shopping',
			completed: false
		}
	];
	const action = {
		type: 'TOGGLE_TODO',
		id: 1
	};
	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shopping',
			completed: true
		}
	];

	expect(toDos(stateBefore, action)).toEqual(stateAfter);
};

testToggleTodo();
console.log('All tests passed.');
