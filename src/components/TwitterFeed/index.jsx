import React, { useState } from 'react';

import TwitterTimelineEmbed from './TwitterTimelineEmbed.jsx';
import Loading from './Loading.jsx';

export default function TwitterFeed() {
	const [isLoading, setIsLoading] = React.useState(true);
	return (
		<div className='bg-platinum bg-opacity-[80%] w-full flex justify-center items-center md:bg-opacity-100'>
			<div className='backdrop-blur-2xl bg-oldlace mx-8 h-[40rem] md:h-[60rem] md:mx-12 md:w-[60rem] lg:w-[50rem] w-full md:backdrop-blur-non shadow-lg bg-opacity-70 rounded-lg'>
				<TwitterTimelineEmbed
					screenName='anjeshbaranwal'
					sourceType='timeline'
					theme='light'
					transparent
					autoHeight
					onLoad={() => setIsLoading(false)}
					noBorders
					lang='hi'
				/>
				<Loading isLoading={isLoading} />
			</div>
		</div>
	);
}
