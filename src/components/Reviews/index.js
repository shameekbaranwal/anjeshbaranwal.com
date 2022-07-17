import React from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title.js';
import ReviewCard from './ReviewCard.js';
import NewReviewNavigationButtons from './NewReviewNavigationButtons.js';
import useReviews from '../../hooks/useReviews.js';

export default function Reviews() {
	const {
		currentReview,
		reviewIndex,
		reviewerImages,
		setEnableAutoScroll,
		updateReviewIndex,
	} = useReviews();

	return (
		<div className='bg-platinum bg-opacity-[85%] lg:bg-opacity-100 flex flex-col justify-center items-center '>
			<div className='w-full h-32'></div>
			<Title>{Hindi.Reviews}</Title>
			<div className='h-10'></div>
			<NewReviewNavigationButtons
				reviewIndex={reviewIndex}
				setReviewIndex={updateReviewIndex}
				reviewerImages={reviewerImages}
			/>
			<div className='flex items-center justify-center w-full'>
				<ReviewCard
					currentReview={currentReview}
					setEnableAutoScroll={setEnableAutoScroll}
				/>
			</div>
			<div className='h-0 lg:h-12'></div>
		</div>
	);
}
