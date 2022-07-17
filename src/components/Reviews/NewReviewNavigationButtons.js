import React from 'react';

export default function NewReviewNavigationButtons({
	reviewIndex,
	setReviewIndex,
	reviewerImages,
}) {
	return (
		<div className='flex items-center justify-center my-4 gap-x-4'>
			{/* make an instagram stories-like UI for all the reviewerImages, and clicking on any one will set the reviewIndex to the index of that image */}
			{reviewerImages.map((image, i) => (
				<button key={i} onClick={() => setReviewIndex(i)}>
					<img
						src={image}
						alt='reviewer'
						className={`w-14 h-14 lg:w-20 lg:h-20 rounded-full transition-all hover:ring ring-brown-200 ${
							i === reviewIndex
								? 'ring shadow-lg opacity-100'
								: 'ring-1 shadow opacity-70'
						}`}
					/>
				</button>
			))}
		</div>
	);
}
