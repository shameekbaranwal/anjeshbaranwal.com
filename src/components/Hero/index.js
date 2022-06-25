import React from 'react';

import AnjeshBaranwal from '../../assets/images/anjesh_baranwal.png';
import Hindi from '../../constants/Hindi.js';

export default function Hero({ show }) {
	return (
		<div
			className={`h-[90vh] flex flex-col justify-start items-center bg-platinum transition-all duration-1000 ${
				show
					? 'opacity-10 bg-opacity-0'
					: 'opacity-100 bg-opacity-[85%]'
			}`}
		>
			<img
				src={AnjeshBaranwal}
				alt='Anjesh Baranwal'
				className='w-48 h-48 rounded-full mt-20'
			/>
			<h2 className='font-kokila text-5xl mt-4'>
				{Hindi.AnjeshBaranwal}
			</h2>
			<p className='font-kruti-bold-italic text-3xl text-center mt-12 w-[22rem]'>
				{Hindi.Introduction}
			</p>
		</div>
	);
}
