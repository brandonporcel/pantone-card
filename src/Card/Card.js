import React, { useState } from 'react';
import './components/PreviewCard.css';
import { Link } from 'react-router-dom';
import Fill from './components/Fill';
import Design from './components/Design';
import PreviewCard from './components/PreviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faObjectUngroup,
	faKeyboard,
} from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DesignCtn from './components/DesignCtn';

const initialUserInfo = {
	nombre: 'Nombre fulano',
	puesto: 'Front-end capoo',
	email: '',
	foto: 'https://brandonporcel.github.io/lianne-react/static/media/LiannePurpleLogo.41b0a55d.png',
};
const userInfo = {
	nombre: '',
	puesto: '',
	email: '',
	foto: '',
	telefono: '',
	visibleSection: '',
};
export default function Card() {
	const [user, setUser] = useState(userInfo);

	return (
		<>
			<header className="header-card">
				<h1 className="header-logo card">
					<Link to="/">Pantone Card</Link>
				</h1>
			</header>
			<main className="main-card">
				<form>
					<DesignCtn
						setUser={setUser}
						logo={faObjectUngroup}
						sectionTitle="disenaa"
						section="design"
						user={user}
					></DesignCtn>
					{/* <DesignCtn
						handleCollapsable={handleCollapsable}
						logo={faObjectUngroup}
						sectionTitle="Diseñaa"
						section="design"
						SectionComponent={<Design></Design>}
						user={user}
					></DesignCtn> */}
					{/* <DesignCtn
						handleCollapsable={handleCollapsable}
						logo={faKeyboard}
						sectionTitle="Relena"
						setion="fill"
						SectionComponent={<Fill user={user} setUser={setUser}></Fill>}
						user={user}
					></DesignCtn> */}
					<fieldset>
						<div
							data-section="fill"
							className="custom-container-title"
							// onClick={handleCollapsable}
						>
							<div className="custom-logo-ctn">
								<FontAwesomeIcon icon={faKeyboard} />
							</div>
							<h2 className="custom-title">Rellena</h2>
							<div className="custom-arrow-ctn">
								{user.visibleSection === 'fill' ? (
									<FontAwesomeIcon icon={faChevronDown} />
								) : (
									<FontAwesomeIcon icon={faChevronUp} />
								)}
							</div>
						</div>
						<Fill user={user} setUser={setUser}></Fill>
					</fieldset>
				</form>
				<PreviewCard
					initialUserInfo={initialUserInfo}
					user={user}
					setUser={setUser}
				></PreviewCard>
			</main>
		</>
	);
}
