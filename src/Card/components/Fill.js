import React from 'react';
import './Fill.css';
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
		return { backgroundImage: `url(${image})` };
	};

	return (
		<>
			<div
				className={`${user.visibleSection === 'fill' ? 'fill__form' : 'hide'}`}
			>
				<div className="form-name-ctn">
					<label className="form_title" htmlFor="name">
						Nombre completo *
					</label>
					<input
						className="form_field"
						type="text"
						name="nombre"
						placeholder="Ej: Diego Maradona"
						onChange={handleChange}
						value={user.nombre}
					/>
				</div>

				<div className="form-job-ctn">
					<label className="form_title" htmlFor="puesto">
						Qué sos?
					</label>
					<input
						className="form_field"
						type="text"
						name="puesto"
						placeholder="Ej: Jugador de Ping Pong"
						onChange={handleChange}
						value={user.puesto}
						maxLength={25}
					/>
				</div>
				<div className="form-photo-ctn">
					<label htmlFor="foto" className="form_title">
						Imagen de perfil *
					</label>
					<input
						id="foto"
						type="file"
						onChange={uploadImage}
						name="foto"
						className="form-file-input"
					/>
					<div className="form__container-btn-photo">
						<label className="form_photo-btn form-label-photo" htmlFor="foto">
							Imagen de perfil *
						</label>

						<div className="form-photo-preview" style={getPreview(user.foto)} />
					</div>
				</div>
				<div className="form__container-instagram">
					<label className="form_title" htmlFor="instagram">
						Instagram @
					</label>
					<input
						className="form_field"
						type="text"
						name="instagram"
						id="instagram"
						placeholder="Ej: frannerd"
						onChange={handleChange}
					/>
				</div>
			</div>
		</>
	);
}
