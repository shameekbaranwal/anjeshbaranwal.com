import React from 'react';

export default function NavOption({ children, href, onClick, newtab }) {
	return (
		<li className='' onClick={onClick}>
			<a
				href={href}
				className='mt-8 text-center transition-all duration-75 text-3xl font-kokilab md:text-xl lg:text-2xl hover:text-3xl md:hover:text-2xl lg:hover:text-2xl md:hover:underline'
				target={newtab ? '_blank' : ''}
				rel='noreferrer'
			>
				{children}
			</a>
		</li>
	);
}
