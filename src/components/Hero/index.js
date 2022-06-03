import React from 'react';

import HeroBG from '../../assets/images/hero_bg.jpg';

export default function Hero() {
	return (
		<div className='w-full h-full absolute'>
			<img
				src={HeroBG}
				alt='Hero Background'
				className='w-full h-full object-cover absolute -z-10'
			/>
			<h1 className='text-9xl font-gallient pl-32 pt-32 bg-black bg-opacity-20 h-full'>
				Anjesh
				<br />
				Baranwal
			</h1>
		</div>
	);
}
