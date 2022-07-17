import { useState } from 'react';

import Hindi from '../constants/Hindi.js';
import Reviewer1 from '../assets/images/Reviewer_4.jpeg';
import Reviewer2 from '../assets/images/Reviewer_1.png';
import Reviewer3 from '../assets/images/Reviewer_2.jpeg';
import Reviewer4 from '../assets/images/Reviewer_3.jpeg';
import Reviewer1Signature from '../assets/images/Reviewer_4_signature.png';
import Reviewer2Signature from '../assets/images/Reviewer_1_signature.png';
import Reviewer3Signature from '../assets/images/Reviewer_2_signature.png';
import Reviewer4Signature from '../assets/images/Reviewer_3_signature.png';
import { useEffect } from 'react';

export default function useReviews() {
	const [reviewIndex, setReviewIndex] = useState(0);
	const [enableAutoScroll, setEnableAutoScroll] = useState(true);

	const allReviews = Hindi.ReviewsContent;
	const reviewerImages = [Reviewer1, Reviewer2, Reviewer3, Reviewer4];
	const reviewerSignatures = [
		Reviewer1Signature,
		Reviewer2Signature,
		Reviewer3Signature,
		Reviewer4Signature,
	];

	allReviews.forEach(review => {
		review.image = reviewerImages[reviewIndex];
		review.signature = reviewerSignatures[reviewIndex];
	});
	const currentReview = allReviews[reviewIndex];

	const showNextReview = () =>
		setReviewIndex((reviewIndex + 1) % allReviews.length);

	const updateReviewIndex = i => {
		setReviewIndex(i);
		setEnableAutoScroll(false);
	};

	useEffect(() => {
		let timeout;
		if (enableAutoScroll) timeout = setTimeout(showNextReview, 5000);

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reviewIndex, enableAutoScroll]);

	return {
		currentReview,
		showNextReview,
		reviewIndex,
		updateReviewIndex,
		setEnableAutoScroll,
		reviewerImages,
	};
}
