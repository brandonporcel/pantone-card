import React from 'react';
import './components/Home.css';
import ButtonHome from './components/ButtonHome';
import IconsHome from './components/IconsHome';

function Home() {
	return (
		<>
			<div className="home-container">
				<header className="header">
					<h1 className="header-logo">Pantone Card</h1>
				</header>
				<main className="main-container">
					<div className="main-title">
						<h2 className="home-title">Crea tu tarjeta de visita</h2>
						<p className="home-subtitle">
							Crea mejores contactos profesionales de forma fácil y cómoda
						</p>
					</div>
					<IconsHome design="Diseña" fill="Rellena" share="Descarga" />
					<ButtonHome text="Comenzar"></ButtonHome>
				</main>
				<footer>
					<a
						href="https://github.com/brandonporcel"
						target="_blank"
						rel="noreferrer"
					>
						brandon porcel
					</a>
				</footer>
			</div>
		</>
	);
}

export default Home;
