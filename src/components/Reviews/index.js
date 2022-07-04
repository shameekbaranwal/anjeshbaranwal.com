import React, { useState } from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title.js';
import ReviewCard from './ReviewCard.js';
import Reviewer1 from '../../assets/images/Reviewer_1.png';
import Reviewer1Signature from '../../assets/images/Reviewer_1_signature.png';

export default function Reviews() {
	const [reviewIndex, setReviewIndex] = useState(0);
	const r = Hindi.ReviewsContent[reviewIndex];
	const reviewerImages = [Reviewer1, Reviewer1, Reviewer1];
	const reviewerSignatures = [
		Reviewer1Signature,
		Reviewer1Signature,
		Reviewer1Signature,
	];

	return (
		<div className='bg-platinum bg-opacity-[85%] lg:bg-opacity-100 flex flex-col justify-center items-center '>
			<div className='w-full h-32'></div>
			<Title>{Hindi.Reviews}</Title>
			<div className='h-10'></div>
			<div className='flex items-center justify-center w-full lg:hidden'>
				<ReviewCard
					about={r.about}
					briefReview={r.briefReview}
					fullReview={r.fullReview}
					name={r.name}
					image={reviewerImages[reviewIndex]}
					signature={reviewerSignatures[reviewIndex]}
				/>
			</div>
			<div className='flex-row items-center justify-center hidden w-full lg:flex'>
				{Hindi.ReviewsContent.map((rev, i) => (
					<div className='' key={i}>
						<ReviewCard
							about={rev.about}
							briefReview={rev.briefReview}
							fullReview={rev.fullReview}
							name={rev.name}
							image={reviewerImages[i]}
							signature={reviewerSignatures[i]}
						/>
					</div>
				))}
			</div>
			{/* Add a Next and Previous button to scroll through Reviews array */}
			<div className='flex items-center justify-center mt-4 lg:hidden'>
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
