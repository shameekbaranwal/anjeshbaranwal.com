import React from 'react';

export default function SocialIcon({ icon, name, href }) {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<img src={icon} alt={name} className='w-6 h-6' />
		</a>
	);
}
