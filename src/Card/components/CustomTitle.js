import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-regular-svg-icons';
export default function CustomTitle({
	title,
	section,
	handleCollapsable,
	user,
	setUser,
}) {
	return (
		<fieldset>
			<div
				data-section={section}
				className="custom-container-title"
				onClick={handleCollapsable}
			>
				<div className="custom-logo-ctn">
					<FontAwesomeIcon icon={faObjectUngroup} />
				</div>
				<h2 className="custom-title">{title}</h2>
				<div className="fill-arrow-ctn">
					{/* {user.visibleSection === 'design' ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : user.visibleSection === 'fill' ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : user.visibleSection === 'share' ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)} */}

					{user.visibleSection === { section } ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)}
				</div>
			</div>
			{section === 'design' ? (
				<Design user={user}></Design>
			) : section === 'fill' ? (
				<Fill user={user} setUser={setUser}></Fill>
			) : section === 'share' ? (
				<Share></Share>
			) : (
				'ahre'
			)}
		</fieldset>
	);
}
