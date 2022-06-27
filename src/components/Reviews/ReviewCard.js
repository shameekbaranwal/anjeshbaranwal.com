import React from 'react';

import Quotes from '../../assets/icons/quotes.svg';
import Hindi from '../../constants/Hindi.js';

export default function ReviewCard({ name, image, about, review }) {
	return (
		<div className='mx-8 lg:mx-2 shadow-lg bg-gradient-to-tr from-brown-400 to-white h-auto rounded-2xl flex justify-between items-center flex-col max-w-md lg:w-auto lg:h-[32rem] no-scrollbar overflow-y-scroll'>
			<div className='flex justify-center items-center py-10 px-4 gap-x-2 w-full md:justify-evenly'>
				<img
					src={image}
					alt={name}
					className='rounded-full ring-2 ring-orange-200 w-20 md:w-32 lg:w-28'
				/>
				<div className='flex flex-col'>
					<p className='font-kruti text-lg text-white bg-brown-200 px-1 rounded-r-xl mb-1'>
						{name}
					</p>
					{about.map(a => (
						<p
							className='font-kruti text-base leading-[1.1]'
							key={a}
						>
							{a}
						</p>
					))}
				</div>
			</div>
			<div className='flex mb-10'>
				<img
					src={Quotes}
					alt='opening quotation marks'
					className='w-10 self-start'
				/>
				<p className='font-kruti-italic text-2xl text-center'>
					{review}
				</p>
				<img
					src={Quotes}
					alt='closing quotation marks'
					className='w-10 rotate-180 self-end'
				/>
			</div>
			<div className='self-end mr-6 mb-10 flex'>
				<p className='font-kruti-bold text-2xl'>{Hindi.ViewMore}</p>
				<p className='text-2xl ml-2'>{'...'}</p>
			</div>
		</div>
	);
}
