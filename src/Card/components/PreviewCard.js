import React from 'react';

import './PreviewCard.css';

export default function PreviewCard({
	palette,
	user,
	setUser,
	initialUserInfo,
}) {
	const handleReset = () => {
		setUser(initialUserInfo);
	};
	return (
		<section>
			<div
				className={`preview__card preview-${
					palette === 1 ? 'default' : palette === 2 ? 'red' : 'grey'
				}`}
			>
				<div className="preview__card--top">
					<button type="reset" onClick={handleReset}>
						reset
					</button>
					<div className="preview__card--text">
						<h2 className="preview--h2">
							{user.nombre === '' ? initialUserInfo.nombre : user.nombre}
						</h2>
						<h3 className="preview--h3">
							{user.puesto === '' ? initialUserInfo.puesto : user.puesto}
						</h3>
					</div>
					<div
						className="preview__card--image"
						// style={{  backgroundImage: `url(${user.foto})` }}
						style={{
							backgroundImage: `url(${
								user.foto === '' ? initialUserInfo.foto : user.foto
							})`,
						}}
					/>
				</div>
			</div>
		</section>
	);
}
