import React from 'react';

import BhojPatra from '../General/BhojPatra.js';

export default function Modal({
	show,
	setShow,
	name,
	image,
	about,
	briefReview,
	fullReview,
	signature,
}) {
	return show ? (
		<>
			<div
				className='fixed inset-0 z-50 flex items-center justify-center overflow-hidden outline-none cursor-default focus:outline-none'
				onClick={() => setShow(false)}
			>
				<div className='relative w-auto'>
					{/*content*/}
					<BhojPatra
						className='md:w-full'
						onClick={e => e.stopPropagation()}
					>
						<div className=''>
							{/* add a button to close the modal */}
							<button
								// make the button stay inside the div
								className='sticky top-0 right-0'
								onClick={() => setShow(false)}
							>
								<svg
									className='w-6 h-6 text-brown-200'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>

							<div className='flex flex-col items-center justify-center w-full mb-6'>
								<img
									src={image}
									alt={name}
									className='border-2 border-black rounded-full w-28 lg:w-36'
								/>
								<div className='flex flex-col mx-4 text-lg'>
									<p className='text-center font-kruti-bold'>
										{name}
									</p>
									{about.map((item, index) => (
										<p
											className='leading-[1.1] font-kruti text-center'
											key={index}
										>
											{item}
										</p>
									))}
								</div>
							</div>
							<div className='flex flex-col text-lg leading-tight font-kruti lg:text-2xl'>
								{fullReview}
								<img
									src={signature}
									alt={name + "'s signature"}
									className='self-end w-48'
								/>
							</div>
						</div>
					</BhojPatra>
				</div>
			</div>
			<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
		</>
	) : null;
}
