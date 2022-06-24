import React from 'react';

export default function NavToggleButton({ isOpen, setIsOpen }) {
	return (
		<button
			className='right-8 flex md:hidden flex-col items-center justify-center w-10 h-8 px-2 group hover:shadow-2xl'
			onClick={() => setIsOpen(!isOpen)}
			aria-label='Toggle Navigation'
		>
			<div
				className={`transition-all duration-300 bg-black w-full mb-1 group-hover:bg-opacity-30 origin-center
				${isOpen ? 'transform translate-y-1 rotate-45 h-[0.110rem] ' : 'h-[0.150rem]'}`}
			></div>
			<div
				className={`transition-all duration-300 bg-black w-full group-hover:bg-opacity-30 origin-center
				${
					isOpen
						? 'transform -translate-y-[0.2rem] -rotate-45 h-[0.110rem]'
						: 'h-[0.150rem]'
				}`}
			></div>
		</button>
	);
}
