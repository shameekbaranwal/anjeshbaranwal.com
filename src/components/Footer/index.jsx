import React from 'react';

export default function Footer() {
	return (
		<div className='py-4 bg-platinum bg-opacity-[80%] lg:bg-opacity-100'>
			<p className='text-center'>
				&copy; {new Date().getFullYear()} Anjesh Baranwal
			</p>
		</div>
	);
}
