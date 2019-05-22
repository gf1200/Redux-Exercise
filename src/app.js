import React, { useState } from 'react';
import FilterLink from './FilterLink';
import TodoList from './todoList';

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
      <TodoList
        visibleToDos={visibleToDos}
        onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}
      />
      <p>
        <FilterLink
          store={store}
          filter="SHOW_ALL"
          currentFilter={visibilityFilter}
        >
          show all
        </FilterLink>
        {'  |  '}
        <FilterLink
          store={store}
          filter="SHOW_ACTIVE"
          currentFilter={visibilityFilter}
        >
          active
        </FilterLink>{' '}
        {'  |  '}
        <FilterLink
          store={store}
          filter="SHOW_DONE"
          currentFilter={visibilityFilter}
        >
          done
        </FilterLink>
      </p>
    </div>
  );
};

export default TodoApp;
