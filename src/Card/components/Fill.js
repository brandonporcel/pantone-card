import React from 'react';

export default function Fill({ user, setUser, userInfo }) {
	const handleChange = (e) => {
		setUser({
			...user,
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
					placeholder="Ej: Sally Jill"
					onChange={handleChange}
					value={userInfo.nombre}
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
					placeholder="Ej: disenadio"
					onChange={handleChange}
					value={userInfo.puesto}
				/>
			</div>
		</>
	);
}
