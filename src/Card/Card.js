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
import {
	faDownload,
	faChevronUp,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
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

	return (
		<>
			<header className="header-card">
				<h1 className="header-logo card">
					<Link to="/">Pantone Card</Link>
				</h1>
			</header>
			<main className="main-card">
				<form>
					<fieldset>
						<div
							data-section="design"
							className="fill__container-title"
							onClick={handleCollapsable}
						>
							<div className="fill-logo-ctn">
								<FontAwesomeIcon icon={faObjectUngroup} />
							</div>
							<h2 className="fill__title">Diseña</h2>
							<div className="fill-arrow-ctn">
								{user.visibleSection === 'design' ? (
									<FontAwesomeIcon icon={faChevronDown} />
								) : (
									<FontAwesomeIcon icon={faChevronUp} />
								)}
							</div>
						</div>
						<Design user={user}></Design>
					</fieldset>
					<fieldset>
						<div
							data-section="fill"
							className="fill__container-title"
							onClick={handleCollapsable}
						>
							<div className="fill-logo-ctn">
								<FontAwesomeIcon icon={faKeyboard} />
							</div>
							<h2 className="fill__title">Rellena</h2>
							<div className="fill-arrow-ctn">
								<FontAwesomeIcon icon={faChevronUp} />
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
