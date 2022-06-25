import React from 'react';

export default function DisplayImage({ src, alt }) {
	return (
		<img
			src={src}
			alt={alt}
			className='w-48 h-48 rounded-full mt-20 md:mt-0 ring-2 ring-neutral-700 shadow-2xl'
		/>
	);
}
