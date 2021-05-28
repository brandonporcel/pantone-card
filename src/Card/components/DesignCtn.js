import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default function DesignCtn({
	setUser,
	logo,
	sectionTitle,
	section,
	user,
}) {
	const handleCollapsable = (e) => {
		const visibleSection = e.currentTarget.getAttribute('data-section');
		if (visibleSection === user.visibleSection) {
			setUser({
				...user,
				visibleSection: '',
			});
		} else {
			setUser({
				...user,
				visibleSection,
			});
		}
	};
	console.log(section, 'section');
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
				{console.log(section, 'lol')}
				<div className="custom-arrow-ctn">
					{console.log(section, 'aa')}
					{user.visibleSection === { section } ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						'a'
					)}
				</div>
			</div>
			{/* {() => <SectionComponent></SectionComponent>} */}
		</fieldset>
	);
}
