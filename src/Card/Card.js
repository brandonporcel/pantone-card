import React, { useState } from 'react';
import './components/PreviewCard.css';
import { Link } from 'react-router-dom';
import Fill from './components/Fill';
import Design from './components/Design';
import CustomTitle from './components/CustomTitle';
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
					<CustomTitle
						title="Diseñaa"
						handleCollapsable={handleCollapsable}
						section="design"
						user={user}
						setUser={setUser}
					></CustomTitle>
					<CustomTitle
						title="Rellena"
						handleCollapsable={handleCollapsable}
						section="fill"
						user={user}
						setUser={setUser}
					></CustomTitle>
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
