import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default function DesignCtn({
	handleCollapsable,
	logo,
	sectionTitle,
	section,
	user,
}) {
	return (
		<fieldset>
			<div
				data-section="design"
				className="custom-container-title"
				onClick={handleCollapsable}
			>
				<div className="custom-logo-ctn">
					<FontAwesomeIcon icon={logo} />
				</div>
				<h2 className="custom-title">{sectionTitle}</h2>
				<div className="custom-arrow-ctn">
					{user.visibleSection === { section } ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)}
				</div>
			</div>
			{/* {() => <SectionComponent></SectionComponent>} */}
		</fieldset>
	);
}
