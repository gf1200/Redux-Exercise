const counter = (state = [0], action) => {
	switch (action.type) {
		case 'INCREMENT':
			return [...state.slice(0, action.id), state[action.id] + 1, ...state.slice(action.id + 1)];
		case 'DECREMENT':
			return [...state.slice(0, action.id), state[action.id] - 1, ...state.slice(action.id + 1)];
		case 'ADD_COUNTER':
			return state.concat([0]);
		case 'REMOVE_COUNTER':
			return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
		default:
			return state;
	}
};

const incrementCounter = (list, index) =>
	list
		.slice(0, index)
		.concat(list[index] + 1)
		.concat(list.slice(index + 1));

const { createStore } = Redux;

const store = createStore(counter);

const Counter = ({ value, onIncrement, removeCounter, onDecrement }) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
		<button onClick={removeCounter}>delete</button>
	</div>
);

const CountersList = ({ list, addCounter }) => (
	<div>
		<button onClick={addCounter}>Add new counter</button>
		{list.map((counter, index) => (
			<Counter
				key={index}
				value={counter}
				onIncrement={() => store.dispatch({ type: 'INCREMENT', id: index })}
				removeCounter={() => store.dispatch({ type: 'REMOVE_COUNTER', id: index })}
				onDecrement={() => store.dispatch({ type: 'DECREMENT', id: index })}
			/>
		))}
	</div>
);

const render = () => {
	ReactDOM.render(
		<CountersList
			list={store.getState()}
			addCounter={() => store.dispatch({ type: 'ADD_COUNTER' })}
		/>,
		document.getElementById('root')
	);
};

store.subscribe(render);
render();

// expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

// expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

// expect(counter(2, { type: 'DECREMENT' })).toEqual(1);

// expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

// expect(counter(1, { type: 'SOMETHING_ELSE' })).toEqual(1);

// expect(counter(undefined, {})).toEqual(0);

// console.log('Tests passed.');
