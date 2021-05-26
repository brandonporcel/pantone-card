import React from 'react';

export default function Fill({ userInfo, setUserInfo }) {
	const handleChange = (e) => {
		setUserInfo({
			...userInfo,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<>
			<div>
				<label className="form_title" htmlFor="name">
					Nombre completo *
				</label>
				<input
					className="form_field"
					type="text"
					name="nombre"
					value={userInfo.nombre}
					placeholder="Ej: Sally Jill"
					onChange={handleChange}
				/>
			</div>
			<div>
				<label className="form_title" htmlFor="name">
					dpmde laburas *
				</label>
				<input
					className="form_field"
					type="text"
					name="puesto"
					value={userInfo.puesto}
					placeholder="Ej: disenadio"
					onChange={handleChange}
				/>
			</div>
		</>
	);
}
