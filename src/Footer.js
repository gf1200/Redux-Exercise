import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ onFilterClick, currentFilter }) => {
	return (
		<p>
			<FilterLink onClick={onFilterClick} filter='SHOW_ALL' currentFilter={currentFilter}>
				show all
			</FilterLink>
			{'  |  '}
			<FilterLink onClick={onFilterClick} filter='SHOW_ACTIVE' currentFilter={currentFilter}>
				active
			</FilterLink>{' '}
			{'  |  '}
			<FilterLink onClick={onFilterClick} filter='SHOW_DONE' currentFilter={currentFilter}>
				done
			</FilterLink>
		</p>
	);
};

export default Footer;
