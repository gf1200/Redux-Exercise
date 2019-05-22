import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ store, currentFilter }) => {
  return (
    <p>
      <FilterLink store={store} filter="SHOW_ALL" currentFilter={currentFilter}>
        show all
      </FilterLink>
      {'  |  '}
      <FilterLink
        store={store}
        filter="SHOW_ACTIVE"
        currentFilter={currentFilter}
      >
        active
      </FilterLink>{' '}
      {'  |  '}
      <FilterLink
        store={store}
        filter="SHOW_DONE"
        currentFilter={currentFilter}
      >
        done
      </FilterLink>
    </p>
  );
};

export default Footer;
