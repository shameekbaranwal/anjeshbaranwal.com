import React from 'react';

import AnjeshBaranwal from '../../assets/images/anjesh_baranwal.png';
import Hindi from '../../constants/Hindi.js';

export default function Hero({ show }) {
	return (
		<>
			<div
				className={`h-[90vh] flex flex-col justify-start items-center bg-platinum transition-all duration-1000 ${
					show
						? 'opacity-10 bg-opacity-0 lg:opacity-100 lg:bg-opacity-100'
						: 'opacity-100 bg-opacity-[85%] lg:opacity-100 lg:bg-opacity-100'
				}`}
			>
				<div className='md:flex justify-center items-center md:mt-40 md:gap-x-10'>
					<img
						src={AnjeshBaranwal}
						alt='Anjesh Baranwal'
						className='w-48 h-48 rounded-full mt-20 md:mt-0 ring-2 ring-neutral-700 shadow-2xl'
					/>
					<h2 className='font-kokila text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-b from-black to-brown-300 md:hidden'>
						{Hindi.Anjesh + ' ' + Hindi.Baranwal}
					</h2>
					<div className='flex flex-col'>
						<h2 className='hidden font-kokila text-center text-8xl text-black md:block'>
							{Hindi.Anjesh}
						</h2>
						<h2 className='hidden font-kokila text-center md:block text-8xl text-brown-300'>
							{Hindi.Baranwal}
						</h2>
					</div>
				</div>
				<p className='font-kruti-bold-italic text-3xl text-center mt-12 w-[22rem] md:w-[40rem]'>
					{Hindi.Introduction}
				</p>
			</div>
		</>
	);
}
