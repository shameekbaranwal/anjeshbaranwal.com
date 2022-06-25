import React, { useEffect, useState } from 'react';

import BookCover from '../../assets/images/cover.png';

export default function Overlay() {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const t = setTimeout(() => {
			setShow(false);
		}, 2500);
		return () => clearTimeout(t);
	}, []);

	return (
		<div
			className={`bg-platinum h-full transition-all duration-200 flex justify-center items-center w-full ${
				show ? 'z-40 opacity-100' : 'opacity-40 -z-10'
			}`}
			// style={{ zIndex: 100 }}
		>
			<img
				src={BookCover}
				alt='Sann Gachhadhvam Book Cover'
				className={`transition-all duration-200 w-5/6 ${
					show ? '' : '-rotate-12'
				}`}
			/>
		</div>
	);
}
