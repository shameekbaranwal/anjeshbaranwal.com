import React from 'react';

import Title from '../General/Title.js';
import BhojPatra from '../General/BhojPatra.js';
import Hindi from '../../constants/Hindi.js';
import AnjeshBaranwalImage from '../../assets/images/anjesh_baranwal.png';

export default function AboutAuthor() {
	return (
		<div className='bg-platinum bg-opacity-[85%] lg:bg-opacity-100 flex flex-col justify-center items-center'>
			<div className='h-32 w-full'></div>
			<Title>{Hindi.AboutAuthor}</Title>
			<div className='h-0 lg:h-12'></div>
			<div className='flex flex-col lg:flex-row justify-center items-center w-full'>
				<div className='lg:self-start lg:px-4 lg:-mt-20'>
					<img
						src={AnjeshBaranwalImage}
						alt='Monika Arora'
						className='w-48 h-48 rounded-full border ring-2 ring-neutral-700 shadow-2xl'
					/>
					<h3 className='font-kokila text-center text-4xl  text-transparent bg-clip-text bg-gradient-to-b from-black to-brown-300'>
						{Hindi.Anjesh + ' ' + Hindi.Baranwal}
					</h3>
					<p className='font-kruti text-2xl -mt-2 text-center text-brown-300'>
						{Hindi.AnjeshBaranwalDesc}
					</p>
				</div>
				<BhojPatra mini>
					<p className='font-kruti text-xl text-center lg:text-3xl px-10 md:px-16 lg:px-20'>
						{Hindi.AboutAuthorContent}
					</p>
				</BhojPatra>
			</div>
		</div>
	);
}
