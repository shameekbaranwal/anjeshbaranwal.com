import React from 'react';
import Hindi from '../../constants/Hindi.js';
import Quotes from '../../assets/icons/quotes.svg';

export function Introduction() {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={Quotes}
				alt='quotes'
				className='w-20 self-start lg:mt-12 -ml-10'
			/>
			<p className='font-kruti-bold-italic text-3xl text-center lg:text-justify w-[22rem] md:w-[40rem] lg:w-[25rem]'>
				{Hindi.Introduction}
			</p>
			<img
				src={Quotes}
				alt='quotes'
				className='rotate-180 w-20 self-end -mr-10'
			/>
		</div>
	);
}
