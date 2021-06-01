import React from 'react';
import html2canvas from 'html2canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
}

function DownloadAsImage(id) {
	var element = document.getElementById(id);
	console.log(element);
	html2canvas(element).then(function (canvas) {
		var myImage = canvas.toDataURL();
		downloadURI(myImage, 'pantone-card.png');
	});
}

export default function Download({ user }) {
	return (
		<div
			className={`${
				user.visibleSection === 'download' ? 'download__form' : 'hide'
			}`}
		>
			<button
				className="download-btn"
				onClick={() => DownloadAsImage('pantone-container')}
				type="button"
			>
				<FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
				Crear Cuenta
			</button>
		</div>
	);
}
