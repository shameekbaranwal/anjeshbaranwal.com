import React from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title.js';
import ReviewCard from './ReviewCard.js';
// import OldReviewNavigationButtons from './OldReviewNavigationButtons.js';
// import Reviewer1 from '../../assets/images/Reviewer_4.jpeg';
// import Reviewer2 from '../../assets/images/Reviewer_3.jpeg';
// import Reviewer3 from '../../assets/images/Reviewer_2.jpeg';
// import Reviewer4 from '../../assets/images/Reviewer_1.png';
// import Reviewer1Signature from '../../assets/images/Reviewer_4_signature.png';
// import Reviewer2Signature from '../../assets/images/Reviewer_3_signature.png';
// import Reviewer3Signature from '../../assets/images/Reviewer_2_signature.png';
// import Reviewer4Signature from '../../assets/images/Reviewer_1_signature.png';
import NewReviewNavigationButtons from './NewReviewNavigationButtons.js';
import useReviews from '../../hooks/useReviews.js';

export default function Reviews() {
	// const [reviewIndex, setReviewIndex] = useState(0);
	// const r = Hindi.ReviewsContent[reviewIndex];
	// const reviewerImages = [Reviewer1, Reviewer2, Reviewer3, Reviewer4];
	// const reviewerSignatures = [
	// 	Reviewer1Signature,
	// 	Reviewer2Signature,
	// 	Reviewer3Signature,
	// 	Reviewer4Signature,
	// ];
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
			{/* <div className='flex-row items-center justify-center hidden grid-cols-2 gap-y-4 md:grid'>
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
			</div> */}
			{/* Add a Next and Previous button to scroll through Reviews array */}
			{/* <OldReviewNavigationButtons
				reviewIndex={reviewIndex}
				setReviewIndex={setReviewIndex}
			/> */}

			<div className='h-0 lg:h-12'></div>
		</div>
	);
}
