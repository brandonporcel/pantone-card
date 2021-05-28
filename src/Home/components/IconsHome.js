import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
// 	faFacebookF,
// 	faSpotify,
// 	faTwitter,
// 	faYoutube,
// 	faInstagram,
// } from '@fortawesome/free-brands-svg-icons';
import {
	faObjectUngroup,
	faKeyboard,
} from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function IconsHome({ design, fill, share }) {
	return (
		<ul className="home__list">
			<li className="home__list-item">
				<FontAwesomeIcon icon={faObjectUngroup} />

				<p className="home__list-text">{design}</p>
			</li>
			<li className="home__list-item">
				<FontAwesomeIcon icon={faKeyboard} />

				<p className="home__list-text">{fill}</p>
			</li>
			<li className="home__list-item">
				<FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>

				<p className="home__list-text">{share}</p>
			</li>
		</ul>
	);
}
IconsHome.propTypes = {
	design: PropTypes.string,
	fill: PropTypes.string,
	share: PropTypes.string,
};
