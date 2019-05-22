import React from 'react';

const FilterLink = ({ children, filter, currentFilter, onClickFilterLink }) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={() => store.dispatch({ type: 'SET_VISIBILITY_FILTER', filter })}
    >
      {children}
    </a>
  );
};

export default FilterLink;
