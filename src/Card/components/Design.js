import React from 'react';

export default function Design({ user }) {
	return (
		<>
			<div
				className={`${
					user.visibleSection === 'design' ? 'design__form' : 'hide'
				}`}
			>
				<div className="form-name-ctn">
					<label className="form_title" htmlFor="name">
						Colores
					</label>
				</div>
			</div>
		</>
	);
}
