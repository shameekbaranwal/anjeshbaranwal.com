import React from 'react';
import BookCover from '../../assets/images/cover.png';

export default function BookCoverLargeScreen() {
	return (
		<div className='hidden lg:flex mt-14 justify-end items-center'>
			<img
				src={BookCover}
				alt='San Gachhadhvam Book Cover'
				className='lg:-rotate-12 lg:w-[70%] xl:w-[75%] lg:h-auto'
			/>
		</div>
	);
}
