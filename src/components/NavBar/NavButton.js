import React from 'react';

export default function NavButton({ title, href }) {
	return (
		<a
			href={href}
			className='font-bold font-barlow text-sm mx-16 inline-flex'
		>
			{title}
		</a>
	);
}
