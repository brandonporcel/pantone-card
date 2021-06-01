import { useEffect } from 'react';
import './Design.css';
export default function Design({ setUser, user, initialUserInfo }) {
	const actionPalettes = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		setUser({
			...user,
			visibleSection: initialUserInfo.visibleSection,
		});
	}, []);
	return (
		<div
			className={`${
				user.visibleSection === 'design' ? 'design__form' : 'hide'
			}`}
		>
			<h3 className="design__subtitle">COLORES</h3>
			<nav>
				<ul className="desing-colors-list">
					<li className="design-form-li design-form-first">
						<input
							type="radio"
							value="1"
							name="palette"
							className="radio_btn"
							onChange={actionPalettes}
							checked={user.palette === '1'}
						/>
						<ul className="theme">
							<li
								className="theme__color"
								style={{ backgroundColor: '#114e4e' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#438792' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#a2deaf' }}
							/>
						</ul>
					</li>
					<li className="design-form-li design__form-second">
						<input
							type="radio"
							value="2"
							name="palette"
							className="radio_btn"
							onChange={actionPalettes}
							checked={user.palette === '2'}
						/>
						<ul className="theme">
							<li
								className="theme__color"
								style={{ backgroundColor: '#420101' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#bd1010' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#e95626' }}
							/>
						</ul>
					</li>
					<li className="design-form-li design__form-third">
						<input
							type="radio"
							value="3"
							name="palette"
							className="radio_btn"
							onChange={actionPalettes}
							checked={user.palette === '3'}
						/>
						<ul className="theme">
							<li
								className="theme__color"
								style={{ backgroundColor: '#3e5b65' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#dfe5eb' }}
							/>
							<li
								className="theme__color"
								style={{ backgroundColor: '#a0c0cf' }}
							/>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}
