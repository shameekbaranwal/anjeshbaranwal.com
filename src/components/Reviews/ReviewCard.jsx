import React, { useState, useEffect } from 'react';

import Quotes from '../../assets/icons/quotes.svg';
import Hindi from '../../constants/Hindi.js';
import Modal from './Modal';
import BGTexture from '../../assets/images/texture_desktop.png';

export default function ReviewCard({ currentReview, setEnableAutoScroll }) {
	const [review, setReview] = useState({});

	const [showModal, setShowModal] = useState(false);
	const [opacity, setOpacity] = useState('0%');

	useEffect(() => {
		setOpacity('0%');

		setTimeout(() => {
			setOpacity('100%');
			setReview(currentReview);
		}, 300);
	}, [currentReview]);

	return (
		<div
			className={`mx-8 bg-transparent bg-no-repeat bg-scroll bg-center h-auto rounded-2xl flex justify-between items-center flex-col max-w-md md:w-auto md:h-[32rem] no-scrollbar overflow-y-scroll shadow-xl transition-all duration-300`}
			style={{
				backgroundImage: `url(${BGTexture})`,
				opacity: opacity,
			}}
		>
			<div className='relative flex items-center justify-center w-full px-4 py-10 gap-x-2 md:justify-evenly'>
				<img
					src={review?.image}
					alt={review?.name}
					className='absolute w-28 transition-all duration-300 rounded-full left-2 ring-2 ring-orange-500'
					style={{
						opacity: opacity,
					}}
				/>
				<div className='flex flex-col w-full pl-2'>
					<p className='w-full pl-[5rem] mb-1 text-center text-lg lg:text-2xl text-white font-kokila bg-brown-300 rounded-r-xl rounded-l-xl'>
						{review?.name}
					</p>
					<div className='pl-[6.5rem]'>
						{review?.about?.map(a => (
							<p
								className='font-kokila text-base leading-[1.1] md:text-xl md:leading-[1]'
								key={a}
							>
								{a}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className='flex mb-10 transition-all duration-300'>
				<img
					src={Quotes}
					alt='opening quotation marks'
					className='self-start w-10'
				/>
				<p className='text-2xl text-center font-kokila italic'>
					{review?.briefReview}
				</p>
				<img
					src={Quotes}
					alt='closing quotation marks'
					className='self-end w-10 rotate-180'
				/>
			</div>
			<div
				className='flex self-end mb-10 mr-6 transition-all duration-100 cursor-pointer hover:scale-[1.1]'
				onClick={() => {
					showModal || setShowModal(true);
					setEnableAutoScroll(false);
				}}
			>
				<p className='text-2xl font-kokilab'>{Hindi.ViewMore}</p>
				<p className='ml-2 text-2xl'>{'...'}</p>
			</div>
			<Modal
				show={showModal}
				setShow={setShowModal}
				name={review?.name}
				image={review?.image}
				about={review?.about}
				briefReview={review?.briefReview}
				fullReview={review?.fullReview}
				signature={review?.signature}
			/>
		</div>
	);
}
