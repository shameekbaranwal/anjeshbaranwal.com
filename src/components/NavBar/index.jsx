import React, { useState } from 'react';
import HorizontalNavOptions from './HorizontalNavOptions';
import NavBrand from './NavBrand';
import NavToggleButton from './NavToggleButton';
import VerticalNavOptions from './VerticalNavOptions';

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		// Outer Div
		//  	NavBrand
		// 		NavToggleButton
		// 		Horizontal Nav Options
		// Vertical Nav Options
		<>
			<nav className='bg-platinum flex z-20 justify-between items-center drop-shadow-xl fixed w-screen h-14 px-4 sm:px-10 '>
				<NavBrand />
				<NavToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
				<HorizontalNavOptions />
			</nav>
			<VerticalNavOptions isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}
