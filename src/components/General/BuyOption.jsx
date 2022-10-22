import React from 'react';

export default function BuyOption({ className, name, img, href, onClick }) {
	return (
		<div className='relative flex items-center justify-center w-full transition duration-100 hover:scale-110 hover:z-10'>
			<img
				src={img}
				alt={name}
				className='absolute w-14 h-14 bg-white rounded-full -left-2.5'
			/>
			<a
				className={`h-10 pl-4 w-full text-left flex justify-center items-center font-bold rounded-r-lg outline-none ${className}`}
				href={href}
				onClick={onClick}
				rel='noopener noreferrer'
				target='_blank'
			>
				{name}
			</a>
		</div>
	);
}
