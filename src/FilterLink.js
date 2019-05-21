import React from 'react';

const FilterLink = ({ children, filter, onClick }) => {
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
};

export default FilterLink;
