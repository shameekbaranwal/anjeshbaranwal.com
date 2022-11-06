import React from 'react';

export default function Loading({ isLoading }) {
	return isLoading ? (
		<div className='flex-col w-full h-full flex justify-center items-center'>
			<div className='flex justify-center items-center gap-x-6'>
				<div className='w-4 h-4 bg-brown-100 animate-ping rounded-full'></div>
				<div className='w-4 h-4 bg-brown-100 animate-ping rounded-full'></div>
				<div className='w-4 h-4 bg-brown-100 animate-ping rounded-full'></div>
			</div>
			<div className='animate-pulse text-brown-100 mt-12 text-center'>
				Loading latest tweets...
			</div>
		</div>
	) : null;
}
