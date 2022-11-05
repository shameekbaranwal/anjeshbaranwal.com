import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function index() {
	return (
		<div className='bg-platinum bg-opacity-[80%] w-full flex justify-center items-center md:bg-opacity-100'>
			<div className='backdrop-blur-2xl h-[40rem] mx-12 md:w-[60rem] w-full md:backdrop-blur-none'>
				<TwitterTimelineEmbed
					screenName='anjeshbaranwal'
					sourceType='timeline'
					theme='light'
					transparent
					autoHeight
				/>
			</div>
		</div>
	);
}
