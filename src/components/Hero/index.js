import React from 'react';

import { BookCoverLargeScreen } from './BookCoverLargeScreen';
import { AnjeshBaranwalDisplayImage } from './AnjeshBaranwalDisplayImage';
import { NameDisplay } from './NameDisplay';
import { Introduction } from './Introduction';

export default function Hero({ show }) {
	return (
		<div
			className={`bg-platinum lg:flex lg:flex-row lg:justify-evenly lg:px-16 xl:pr-0 transition-all duration-1000 ${
				show
					? 'opacity-10 bg-opacity-0 lg:opacity-100 lg:bg-opacity-100'
					: 'opacity-100 bg-opacity-[85%] lg:opacity-100 lg:bg-opacity-100'
			}
			`}
		>
			<div
				className={`h-[90vh] flex flex-col justify-start items-center`}
			>
				<div className='md:flex flex-row justify-center items-center md:mt-40 lg:mt-10 md:gap-x-10'>
					<AnjeshBaranwalDisplayImage />
					<NameDisplay />
				</div>
				<Introduction />
			</div>
			<BookCoverLargeScreen />
		</div>
	);
}
