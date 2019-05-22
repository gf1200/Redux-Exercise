import React from 'react';
import Todo from './Todo';

const TodoList = ({ visibleToDos = [], onTodoClick }) => {
  return (
    <ul>
      {visibleToDos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};

export default TodoList;
