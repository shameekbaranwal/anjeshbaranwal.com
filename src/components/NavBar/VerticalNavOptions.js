import React from 'react';
import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';

export default function VerticalNavOptions({ isOpen, setIsOpen }) {
	return (
		<div
			className={`absolute overflow-hidden bg-platinum shadow-md rounded flex flex-col items-center overflow-x-hidden transition-all duration-500 text-brown-100 w-full z-0 pt-14 ${
				isOpen ? 'h-[100%]' : 'h-[0%]'
			}`}
		>
			<NavOption href='/#'>çLrkouk</NavOption>
			<NavOption href='/#'>çkDdFku</NavOption>
			<NavOption href='/#'>{`leh{kk`}</NavOption>
			<NavOption href='/#'>{`ys[kd&ifjp;`}</NavOption>
			<SocialMedia className='mt-12 gap-x-8' />
		</div>
	);
}
