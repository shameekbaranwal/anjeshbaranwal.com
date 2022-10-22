import Hindi from '../../constants/Hindi.js';

const OldReviewNavigationButtons = ({ reviewIndex, setReviewIndex }) => {
	return (
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
	);
};

export default OldReviewNavigationButtons;
