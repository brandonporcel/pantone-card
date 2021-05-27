import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fill from './components/Fill';
import PreviewCard from './components/PreviewCard';

export default function Card({ userInfo, user, setUser }) {
	return (
		<>
			<header>
				<Link to="/">volverrrrrrr</Link>
			</header>
			<main className="container">
				<form>
					<fieldset>
						<Fill userInfo={userInfo} user={user} setUser={setUser}></Fill>
					</fieldset>
				</form>
				<PreviewCard
					userInfo={userInfo}
					user={user}
					setUser={setUser}
				></PreviewCard>
			</main>
		</>
	);
}
