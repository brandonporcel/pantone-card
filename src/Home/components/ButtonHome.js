import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function ButtonHome({ text }) {
	return (
		<Link className="home-button" to="/card">
			<span>{text}</span>
		</Link>
	);
}
ButtonHome.propTypes = {
	text: PropTypes.string,
};
