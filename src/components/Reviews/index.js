import React, { useState } from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title.js';
import ReviewCard from './ReviewCard.js';
import Reviewer1 from '../../assets/images/Reviewer_1.png';

export default function Reviews() {
	const [reviewIndex, setReviewIndex] = useState(0);
	const r = Hindi.ReviewsContent[reviewIndex];
	const reviewerImages = [Reviewer1, Reviewer1, Reviewer1];

	return (
		<div className='bg-platinum bg-opacity-[85%] lg:bg-opacity-100 flex flex-col justify-center items-center '>
			<div className='h-32 w-full'></div>
			<Title>{Hindi.Reviews}</Title>
			<div className='h-10'></div>
			<div className='w-full flex justify-center items-center lg:hidden'>
				<ReviewCard
					about={r.about}
					review={r.review}
					name={r.name}
					image={Reviewer1}
				/>
			</div>
			<div className='w-full hidden lg:flex flex-row justify-center items-center'>
				{Hindi.ReviewsContent.map((rev, i) => (
					<div className='' key={i}>
						<ReviewCard
							about={rev.about}
							review={rev.review}
							name={rev.name}
							image={reviewerImages[i]}
						/>
					</div>
				))}
			</div>
			{/* Add a Next and Previous button to scroll through Reviews array */}
			<div className='flex justify-center items-center mt-4 lg:hidden'>
				<button
					className={`bg-brown-200 hover:bg-brown-300 text-white py-2 px-4 rounded-full ml-4 disabled:opacity-20`}
					onClick={() => {
						if (reviewIndex > 0) {
							setReviewIndex(reviewIndex - 1);
						}
					}}
					disabled={reviewIndex === 0}
				>
					{'<'}
				</button>
				<button
					className={`bg-brown-200 hover:bg-brown-300 text-white py-2 px-4 rounded-full ml-4 disabled:opacity-20`}
					onClick={() => {
						if (reviewIndex < Hindi.ReviewsContent.length - 1) {
							setReviewIndex(reviewIndex + 1);
						}
					}}
					disabled={reviewIndex === Hindi.ReviewsContent.length - 1}
				>
					{'>'}
				</button>
			</div>
			<div className='h-0 lg:h-12'></div>
		</div>
	);
}
