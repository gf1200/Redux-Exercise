import React from 'react';

const FilterLink = ({ children, filter, currentFilter, onClick }) => {
	if (currentFilter === filter) {
		return <span>{children}</span>;
	}

	return (
		<a href='#' onClick={() => onClick(filter)}>
			{children}
		</a>
	);
};

export default FilterLink;
