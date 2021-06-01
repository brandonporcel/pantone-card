import React, { useState } from 'react';
import './components/PreviewCard.css';
import { Link } from 'react-router-dom';
import CustomTitle from './components/CustomTitle';
import PreviewCard from './components/PreviewCard';

const initialUserInfo = {
	nombre: 'Lendrick Kamar',
	puesto: 'Tu papá',
	visibleSection: 'design',
	foto: 'https://sitecoreaudioprod.umusicpub.com/sitecore_media/71697910-EB41-4678-914A-6357E5F24351.jpg',
	instagram: '',
	palette: '1',
};
const userInfo = {
	nombre: '',
	puesto: '',
	foto: '',
	visibleSection: '',
	instagram: '',
	palette: '1',
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
						initialUserInfo={initialUserInfo}
						title="Diseña"
						handleCollapsable={handleCollapsable}
						section="design"
						user={user}
						setUser={setUser}
					></CustomTitle>
					<CustomTitle
						initialUserInfo={initialUserInfo}
						title="Rellena"
						handleCollapsable={handleCollapsable}
						section="fill"
						user={user}
						setUser={setUser}
					></CustomTitle>

					<CustomTitle
						initialUserInfo={initialUserInfo}
						title="Descarga"
						handleCollapsable={handleCollapsable}
						section="download"
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
			<footer className="card-footer">
				<a
					href="https://github.com/brandonporcel"
					target="_blank"
					rel="noreferrer"
				>
					brandon porcel
				</a>
			</footer>
		</>
	);
}
