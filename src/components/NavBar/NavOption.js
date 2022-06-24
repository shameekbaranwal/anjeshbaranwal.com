import React from 'react';

export default function NavOption({ children, href }) {
	return (
		<li className='h-full'>
			<a
				href={href}
				className='font-kruti-bold text-center text-2xl mt-8 md:text-lg lg:text-2xl'
			>
				{children}
			</a>
		</li>
	);
}
