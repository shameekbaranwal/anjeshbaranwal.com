import React from 'react';
import BookCover from '../../assets/images/oldcover.png';

export default function BookCoverLargeScreen() {
	return (
		<div className='hidden lg:flex justify-end items-center'>
			<img
				src={BookCover}
				alt='San Gachhadhvam Book Cover'
				className='lg:-rotate-12 shadow-2xl lg:w-[70%] xl:w-[75%] lg:h-auto'
			/>
		</div>
	);
}
