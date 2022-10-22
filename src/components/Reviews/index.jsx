import React from 'react';

// import Hindi from '../../constants/Hindi.js';
import ReviewHeadingText from '../General/ReviewHeadingText';
import Title from '../General/Title';
import ReviewCard from './ReviewCard';
import NewReviewNavigationButtons from './NewReviewNavigationButtons';
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
		<div
			className='bg-platinum bg-opacity-[80%] lg:bg-opacity-100 flex flex-col justify-center items-center py-12'
			id='Reviews'
		>
			<Title>
				{/* {Hindi.Reviews} */}
				<ReviewHeadingText />
			</Title>
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
