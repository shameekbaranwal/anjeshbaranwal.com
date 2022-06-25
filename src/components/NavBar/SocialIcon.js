import React from 'react';

export default function SocialIcon({ icon, name, href }) {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<img
				src={icon}
				alt={name}
				className='w-8 h-8 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:scale-125 hover:animate-pulse transition-all'
			/>
		</a>
	);
}
