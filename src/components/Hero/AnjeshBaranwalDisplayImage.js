import React from 'react';
import AnjeshBaranwal from '../../assets/images/anjesh_baranwal.png';

export function AnjeshBaranwalDisplayImage() {
	return (
		<img
			src={AnjeshBaranwal}
			alt='Anjesh Baranwal'
			className='w-48 h-48 rounded-full mt-20 md:mt-0 ring-2 ring-neutral-700 shadow-2xl'
		/>
	);
}
