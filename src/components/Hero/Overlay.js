import React, { useEffect, useState } from 'react';

import BookCover from '../../assets/images/cover.png';
import Util from '../../constants/Util.js';

export default function Overlay({ show, setShow }) {
	const [rotate, setRotate] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setShow(false), Util.initAnimationDuration);
		const t2 = setTimeout(
			() => setRotate(true),
			Util.initAnimationDuration - Util.rotateAnimationDelay,
		);
		return () => {
			clearTimeout(t);
			clearTimeout(t2);
		};
	}, [setShow]);

	return (
		<div
			className={`w-full h-full fixed flex justify-center items-center transition-all bg-platinum duration-500 ${
				show ? 'z-[5]' : 'z-[-1]'
			}`}
		>
			<img
				src={BookCover}
				alt='San Gachhadhvam Book Cover'
				className={`w-5/6 h-auto transition-all duration-1000 ${
					rotate && '-rotate-12'
				}`}
			/>
		</div>
	);
}
