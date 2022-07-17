import React from 'react';

export default function NavOption({ children, href, onClick }) {
	return (
		<li className='' onClick={onClick}>
			<a
				href={href}
				className='mt-8 text-2xl text-center transition-all duration-75 font-kruti-bold md:text-lg lg:text-2xl hover:text-3xl md:hover:text-lg lg:hover:text-2xl md:hover:underline'
			>
				{children}
			</a>
		</li>
	);
}
