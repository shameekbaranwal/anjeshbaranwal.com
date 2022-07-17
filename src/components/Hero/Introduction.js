import React from 'react';

import Signature from '../../assets/images/signature.png';
import Hindi from '../../constants/Hindi.js';
import Quotes from '../../assets/icons/quotes.svg';

export default function Introduction() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<img
				src={Quotes}
				alt='quotes'
				className='relative self-start w-12 top-5 -left-10 lg:top-6 lg:-left-12'
			/>
			<p className='font-kruti-bold-italic text-3xl lg:text-3xl text-center lg:text-justify w-[22rem] md:w-[40rem] lg:w-[25rem]'>
				{Hindi.Introduction}
			</p>
			<img
				src={Quotes}
				alt='quotes'
				className='relative self-end w-12 rotate-180 -right-8 -top-8 md:-top-12 md:-right-6 lg:-right-12 lg:-top-10'
			/>
			<img
				src={Signature}
				alt='anjesh'
				className='self-end w-48 -mt-24 md:w-auto'
			/>
		</div>
	);
}
