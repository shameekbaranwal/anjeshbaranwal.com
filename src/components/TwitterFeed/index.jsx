import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function index() {
	return (
		<div className='bg-platinum bg-opacity-[80%] w-full flex justify-center items-center md:bg-opacity-100'>
			<div className='backdrop-blur-2xl bg-oldlace mx-2 h-[40rem] md:h-[60rem] md:mx-12 md:w-[60rem] w-full md:backdrop-blur-non shadow-lg bg-opacity-70'>
				<TwitterTimelineEmbed
					screenName='anjeshbaranwal'
					sourceType='timeline'
					theme='light'
					transparent
					autoHeight
					// options={{ width: 'full' }}
					placeholder='loading latest tweets...'
				/>
			</div>
		</div>
	);
}
