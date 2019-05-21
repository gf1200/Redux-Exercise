import React, { useState } from 'react';
import FilterLink from './FilterLink';

let nextToId = 0;

const TodoApp = ({ store, state }) => {
  const [inputState, setInputState] = useState('');

  const onInputChange = e => {
    setInputState(e.target.value);
  };

  let filter = state.visibilityFilter;
  console.log(filter, 0);

  const filterList = filter => {
    switch (filter) {
      case 'SHOW_ALL':
        return state.toDos;
      case 'SHOW_ACTIVE':
        return state.toDos.filter(task => task.completed !== true);
      case 'SHOW_DONE':
        return state.toDos.filter(task => task.completed === true);
      default:
        return state.toDos;
    }
  };

  return (
    <div>
      <h1>Too do's list:</h1>
      <input
        type="text"
        value={inputState}
        onChange={onInputChange.bind(null)}
      />
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
        {filterList(filter).map(todo => (
          <li
            key={todo.id}
            onClick={() => store.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <p>
        <FilterLink onClick={() => store.dispatch({ type: 'SHOW_ALL' })}>
          show all
        </FilterLink>
        {'  |  '}
        <FilterLink onClick={() => store.dispatch({ type: 'SHOW_ACTIVE' })}>
          active
        </FilterLink>{' '}
        {'  |  '}
        <FilterLink onClick={() => store.dispatch({ type: 'SHOW_DONE' })}>
          done
        </FilterLink>
      </p>
    </div>
  );
};

export default TodoApp;
