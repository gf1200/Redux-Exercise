import React from 'react';

const AddTodo = ({ onAddClick }) => {
  let input = React.createRef();

  function handleClick() {
    onAddClick(input.current.value);
    input.current.value = '';
  }

  return (
    <>
      <input type="text" ref={input} />
      <button onClick={handleClick}>Add task</button>
    </>
  );
};

export default AddTodo;
