import React from 'react';

import Hindi from '../../constants/Hindi.js';

export default function ReviewHeadingText({ className }) {
	return (
		<>
			<span className={`font-kruti-bold ${className}`}>
				{Hindi.Reviews1}
			</span>
			<span className={`font-serif font-bold ${className}`}>/</span>
			<span className={`font-kruti-bold ${className}`}>
				{Hindi.Reviews2}
			</span>
		</>
	);
}
