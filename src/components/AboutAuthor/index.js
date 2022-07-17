import React from 'react';

import Title from '../General/Title.js';
import BhojPatra from '../General/BhojPatra.js';
import Hindi from '../../constants/Hindi.js';
import AnjeshBaranwalImage from '../../assets/images/anjesh_baranwal.png';

export default function AboutAuthor() {
	return (
		<div
			className='bg-platinum bg-opacity-[80%] lg:bg-opacity-100 flex flex-col justify-center items-center py-12'
			id='Author'
		>
			<Title>{Hindi.AboutAuthor}</Title>
			<div className='h-0 lg:h-12'></div>
			<div className='flex flex-col items-center justify-center w-full lg:flex-row'>
				<div className='lg:self-start lg:px-4 lg:-mt-20'>
					<img
						src={AnjeshBaranwalImage}
						alt='Monika Arora'
						className='w-48 h-48 border rounded-full shadow-2xl ring-2 ring-neutral-700'
					/>
					<h3 className='text-4xl text-center text-transparent font-kokila bg-clip-text bg-gradient-to-b from-black to-brown-300'>
						{Hindi.Anjesh + ' ' + Hindi.Baranwal}
					</h3>
					<p className='-mt-2 text-2xl text-center font-kruti text-brown-300'>
						{Hindi.AnjeshBaranwalDesc}
					</p>
				</div>
				<BhojPatra mini>
					<p className='px-10 text-xl text-center font-kruti lg:text-3xl md:px-16 lg:px-20'>
						{Hindi.AboutAuthorContent}
					</p>
				</BhojPatra>
			</div>
		</div>
	);
}
