import React from 'react';

import Signature from '../../assets/images/signature.png';
import Hindi from '../../constants/Hindi.js';
import Quotes from '../../assets/icons/quotes.svg';

export default function Introduction() {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img
				src={Quotes}
				alt='quotes'
				className='w-12 md:w-20 self-start lg:mt-12 -ml-4 sm:-ml-8 md:-ml-10'
			/>
			<p className='font-kruti-bold-italic text-3xl lg:text-2xl text-center lg:text-justify w-[22rem] md:w-[40rem] lg:w-[25rem]'>
				{Hindi.Introduction}
			</p>
			<img
				src={Quotes}
				alt='quotes'
				className='rotate-180 w-12 md:w-20 lg:w-16 self-end -mr-4 sm:-mr-8 md:-mr-10 '
			/>
			<img
				src={Signature}
				alt='anjesh'
				className='-mt-24 self-end w-48 md:w-auto'
			/>
		</div>
	);
}
