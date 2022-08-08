import { useState, useEffect } from 'react';

import Hindi from '../constants/Hindi.js';

export default function useReviews() {
	const [reviewIndex, setReviewIndex] = useState(0);
	const [enableAutoScroll, setEnableAutoScroll] = useState(true);
	const allReviews = Hindi.ReviewsContent;

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
		reviewerImages: allReviews.map(r => r.image),
	};
}
