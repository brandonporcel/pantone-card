import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function ButtonHome({ text }) {
	return <Link to="/card">{text}</Link>;
}
ButtonHome.propTypes = {
	text: PropTypes.string,
};
