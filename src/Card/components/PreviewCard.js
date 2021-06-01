import React, { useEffect } from 'react';

import './PreviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
export default function PreviewCard({ user, setUser, initialUserInfo }) {
	const handleReset = () => {
		setUser(initialUserInfo);
	};
	useEffect(() => {
		const d = document;

		user.instagram === ''
			? d.querySelector('.preview__card--image').classList.add('big')
			: d.querySelector('.preview__card--image').classList.remove('big');
	}, [user.instagram]);
	return (
		<section>
			<div
				id="preview-card-ctn"
				className={`preview__card preview-${
					user.palette === '1'
						? 'default'
						: user.palette === '2'
						? 'second'
						: user.palette === '3'
						? 'third'
						: ''
				}`}
			>
				<button className="reset-btn" type="reset" onClick={handleReset}>
					<FontAwesomeIcon
						className="reset-icon"
						icon={faRecycle}
					></FontAwesomeIcon>
					reset
				</button>
				<article className="pantone-container" id="pantone-container">
					<div
						id="preview-card-img"
						className="preview__card--image"
						// style={{  backgroundImage: `url(${user.foto})` }}
						style={{
							backgroundImage: `url(${
								user.foto === '' ? initialUserInfo.foto : user.foto
							})`,
						}}
					/>
					<div className="preview__card--text">
						<h2 className="card-title">
							{user.nombre === '' ? initialUserInfo.nombre : user.nombre}
						</h2>
						<h3 className="card-subtitle">
							{user.puesto === '' ? initialUserInfo.puesto : user.puesto}
						</h3>
					</div>

					<nav
						className={user.instagram === '' ? 'hide' : 'preview__card--social'}
					>
						<ul className="preview__card--ul">
							<li className="social-card-li">
								<a
									className="social-card-link"
									target="_blank"
									rel="noreferrer"
									href={`https://instagram.com/${user.instagram}`}
								>
									<FontAwesomeIcon
										className="social-card-icon"
										icon={faInstagram}
									></FontAwesomeIcon>
								</a>
							</li>
						</ul>
					</nav>
				</article>
			</div>
		</section>
	);
}
