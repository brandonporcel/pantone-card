import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Download';
import './CustomTitle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronDown,
	faChevronUp,
	faDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
	faObjectUngroup,
	faKeyboard,
} from '@fortawesome/free-regular-svg-icons';
export default function CustomTitle({
	title,
	section,
	handleCollapsable,
	user,
	setUser,
	initialUserInfo,
}) {
	return (
		<fieldset>
			<div
				data-section={section}
				className="custom-container-title"
				onClick={handleCollapsable}
			>
				<div className="custom-logo-ctn">
					{section === 'design' ? (
						<FontAwesomeIcon icon={faObjectUngroup} />
					) : section === 'fill' ? (
						<FontAwesomeIcon icon={faKeyboard} />
					) : section === 'download' ? (
						<FontAwesomeIcon icon={faDownload} />
					) : (
						'ahre'
					)}
				</div>
				<h2 className="custom-title">{title}</h2>
				<div className="custom-arrow-ctn">
					{user.visibleSection === `${section}` ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)}
				</div>
			</div>
			{section === 'design' ? (
				<Design
					setUser={setUser}
					initialUserInfo={initialUserInfo}
					user={user}
				></Design>
			) : section === 'fill' ? (
				<Fill user={user} setUser={setUser}></Fill>
			) : (
				<Share user={user}></Share>
			)}
		</fieldset>
	);
}
