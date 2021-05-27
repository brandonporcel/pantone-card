import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fill from './components/Fill';
import PreviewCard from './components/PreviewCard';
const initialUserInfo = {
	nombre: 'Nombre fulano',
	puesto: 'Front-end capoo',
	email: '',
	foto: 'https://brandonporcel.github.io/lianne-react/static/media/LiannePurpleLogo.41b0a55d.png',
	telefono: '',
};
const userInfo = {
	nombre: '',
	puesto: '',
	email: '',
	foto: '',
	telefono: '',
};
export default function Card() {
	const [user, setUser] = useState(userInfo);

	return (
		<>
			<header>
				<Link to="/">volverrrrrrr</Link>
			</header>
			<main className="container">
				<form>
					<fieldset>
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
