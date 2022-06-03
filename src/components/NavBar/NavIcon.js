import React from 'react';

export default function NavIcon({ title, icon, href }) {
	return (
		<a href={href} className='text-sm mx-8'>
			<img src={icon} alt={title} className='w-[36px] h-[36px] inline' />
		</a>
	);
}
