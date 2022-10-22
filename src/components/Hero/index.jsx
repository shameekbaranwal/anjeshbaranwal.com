import React from 'react';

import AnjeshBaranwal from '../../assets/images/anjesh_baranwal.png';
import BookCoverLargeScreen from './BookCoverLargeScreen';
import DisplayImage from '../General/DisplayImage';
import NameDisplay from './NameDisplay';
import Introduction from './Introduction';

export default function Hero({ show }) {
	return (
		<div
			className={`bg-platinum lg:flex lg:flex-row lg:justify-evenly lg:px-16 xl:pr-0 transition-all duration-1000 ${
				show
					? 'opacity-10 bg-opacity-0 lg:opacity-100 lg:bg-opacity-100'
					: 'opacity-100 bg-opacity-[80%] lg:opacity-100 lg:bg-opacity-100'
			}
			`}
		>
			<div
				className={`min-h-[90vh] h-auto flex flex-col justify-center items-center`}
			>
				<div className='flex-row items-center justify-center md:flex md:mt-40 lg:mt-20 md:gap-x-10'>
					<DisplayImage
						src={AnjeshBaranwal}
						alt={'Anjesh Baranwal'}
					/>
					<NameDisplay />
				</div>
				<Introduction />
			</div>
			<BookCoverLargeScreen />
		</div>
	);
}
