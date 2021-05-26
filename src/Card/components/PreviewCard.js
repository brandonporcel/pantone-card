import React from 'react';

import './PreviewCard.css';

export default function PreviewCard({ palette, userInfo, setUserInfo }) {
	const handleReset = () => {
		Object.keys(userInfo).forEach((el) => {
			setUserInfo((userInfo[el] = ''));
		});
		// console.log(userInfo);
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
							{userInfo.nombre === '' ? 'Nombre Apellidoss' : userInfo.nombre}
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
