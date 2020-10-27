import React from 'react';
import queryString from 'query-string';

const Posts = props => {
	const { year, month } = props.match.params;
	const { search } = props.location;

	const result = queryString.parse(search);

	return (
		<div>
			<h1>Posts</h1>
			Year: {year}, Month: {month}
		</div>
	);
};

export default Posts;
