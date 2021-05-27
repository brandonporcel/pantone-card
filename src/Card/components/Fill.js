import React from 'react';

export default function Fill({ user, setUser }) {
	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const uploadImage = (e) => {
		const avatarUrl = URL.createObjectURL(e.target.files[0]);
		setUser({
			...user,
			foto: avatarUrl,
		});
	};
	const getPreview = (image) => {
		console.log('HOLA');
		// 	return 'backgroundImage: `url(${image})`';
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
					value={user.nombre}
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
					value={user.puesto}
				/>
			</div>
			<div className="form__container-photo">
				<label className="form_title-photo" htmlFor="photo">
					Imagen de perfil *
				</label>
				<input type="file" onChange={uploadImage} name="foto" />
				<div className="form__container-btn">
					<div className="form__photo-preview" style={getPreview(user.foto)} />
				</div>
			</div>
		</>
	);
}
