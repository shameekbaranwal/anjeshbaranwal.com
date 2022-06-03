import React from 'react';

import AboutBookBG from '../../assets/images/about_book_bg.png';

export default function AboutBook() {
	return (
		<div
			className='h-screen flex justify-center items-center snap-start'
			style={{
				backgroundImage: `url(${AboutBookBG})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className='text-seashell mr-96'>
				<h2 className='font-grace text-5xl'>About The Book</h2>
				<p className='font-buda font-thin text-xl leading-relaxed mt-8 text-justify max-w-md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}
