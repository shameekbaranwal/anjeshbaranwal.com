import React, { useState } from 'react';

import Quotes from '../../assets/icons/quotes.svg';
import Hindi from '../../constants/Hindi.js';
import Modal from './Modal.js';
import BGTexture from '../../assets/images/texture_desktop.png';

export default function ReviewCard({
	name,
	image,
	about,
	briefReview,
	fullReview,
	signature,
}) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div
			className='mx-8 lg:mx-2 bg-transparent bg-no-repeat bg-scroll bg-center h-auto rounded-2xl flex justify-between items-center flex-col max-w-md lg:w-auto lg:h-[32rem] no-scrollbar overflow-y-scroll shadow-xl'
			onClick={() => showModal || setShowModal(true)}
			style={{
				backgroundImage: `url(${BGTexture})`,
			}}
		>
			<div className='relative flex items-center justify-center w-full px-4 py-10 gap-x-2 md:justify-evenly'>
				<img
					src={image}
					alt={name}
					className='absolute w-24 rounded-full left-2 ring-2 ring-orange-500'
				/>
				<div className='flex flex-col w-full pl-2'>
					<p className='w-full pl-[5rem] mb-1 text-center text-lg lg:text-xl text-white font-kruti bg-brown-200 rounded-r-xl rounded-l-xl'>
						{name}
					</p>
					<div className='pl-[5.5rem]'>
						{about.map(a => (
							<p
								className='font-kruti text-base leading-[1.1] lg:text-lg lg:leading-[1]'
								key={a}
							>
								{a}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='flex mb-10'>
				<img
					src={Quotes}
					alt='opening quotation marks'
					className='self-start w-10'
				/>
				<p className='text-2xl text-center font-kruti-italic'>
					{briefReview}
				</p>
				<img
					src={Quotes}
					alt='closing quotation marks'
					className='self-end w-10 rotate-180'
				/>
			</div>
			<div className='flex self-end mb-10 mr-6'>
				<p className='text-2xl font-kruti-bold'>{Hindi.ViewMore}</p>
				<p className='ml-2 text-2xl'>{'...'}</p>
			</div>
			<Modal
				show={showModal}
				setShow={setShowModal}
				name={name}
				image={image}
				about={about}
				briefReview={briefReview}
				fullReview={fullReview}
				signature={signature}
			/>
		</div>
	);
}
