import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fill from './components/Fill';
import PreviewCard from './components/PreviewCard';
const initialUserInfo = {
	nombre: '',
	puesto: '',
	email: '',
	telefono: '',
};
export default function Card() {
	const [userInfo, setUserInfo] = useState(initialUserInfo);

	return (
		<>
			<header>
				<Link to="/">volverrrrrrr</Link>
			</header>
			<main className="container">
				<form>
					{/* setPalette={setPalette}  */}
					<fieldset>
						<Fill userInfo={userInfo} setUserInfo={setUserInfo}></Fill>
					</fieldset>
				</form>
				<PreviewCard
					userInfo={userInfo}
					setUserInfo={setUserInfo}
				></PreviewCard>
			</main>
		</>
	);
}
