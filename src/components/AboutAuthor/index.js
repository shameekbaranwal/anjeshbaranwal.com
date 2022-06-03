import React from 'react';

import SignatureImage from '../../assets/images/signature.png';

export default function AboutAuthor() {
	return (
		<div className='h-screen w-full snap-start shadow-inner-top flex justify-center items-center'>
			<div className=''>
				<div className='flex gap-x-16 mt-20'>
					<div className='relative w-96 h-96'>
						<div className='w-96 h-96 absolute -rotate-6 bg-[#DEDAC0]'></div>
						<div className='w-96 h-96 absolute bg-[#1E140B]'></div>
					</div>
					<div className='flex flex-col justify-center'>
						<h2 className='font-cutive text-center text-base -mt-10 mb-10 self-start ml-10'>
							About the author
						</h2>
						<p className='font-grace text-5xl'>hi, I am Anjesh!</p>
						<p className='max-w-md text-justify text-lg font-buda mt-12 leading-relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
						<img
							src={SignatureImage}
							alt='anjesh'
							className='w-40 h-auto self-end'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
