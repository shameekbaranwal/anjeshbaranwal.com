import React from 'react';

import Title from '../General/Title';
import BhojPatra from '../General/BhojPatra';
import Hindi from '../../constants/Hindi.js';
import MonikaAroraImage from '../../assets/images/monika_arora.png';

export default function Foreword() {
	return (
		<div
			className='bg-platinum bg-opacity-[80%] lg:bg-opacity-100 flex flex-col justify-center items-center py-12'
			id='Foreword'
		>
			<Title>{Hindi.Foreword}</Title>
			<div className='h-0 lg:h-12'></div>
			<div className='flex flex-col items-center justify-center w-full lg:flex-row'>
				<div className='lg:self-start lg:px-4 lg:-mt-20'>
					<img
						src={MonikaAroraImage}
						alt='Monika Arora'
						className='w-48 h-48 border rounded-full shadow-2xl ring-2 ring-neutral-700'
					/>
					<h3 className='text-3xl text-transparent font-kokilab text-center bg-clip-text bg-gradient-to-b from-black to-brown-300'>
						{Hindi.MonikaAroraName}
					</h3>
					<p className='-mt-2 text-2xl text-center font-kokila text-brown-300'>
						{Hindi.MonikaAroraDesc}
					</p>
				</div>
				<BhojPatra>
					<p className='text-xl text-center font-kokila lg:text-3xl'>
						{Hindi.ForewordContent}
					</p>
				</BhojPatra>
			</div>
		</div>
	);
}
