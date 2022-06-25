import React from 'react';

export default function NavOption({ children, href }) {
	return (
		<li className=''>
			<a
				href={href}
				className='font-kruti-bold text-center text-2xl mt-8 md:text-lg lg:text-2xl hover:text-3xl md:hover:text-lg lg:hover:text-2xl md:hover:underline transition-all duration-75'
			>
				{children}
			</a>
		</li>
	);
}
