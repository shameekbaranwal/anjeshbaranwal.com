import React from 'react';

import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';

export default function HorizontalNavOptions() {
	return (
		<ul className='hidden md:flex justify-center items-center gap-x-6 lg:gap-x-10'>
			<NavOption href='/#'>çLrkouk</NavOption>
			<NavOption href='/#'>çkDdFku</NavOption>
			<NavOption href='/#'>{`leh{kk`}</NavOption>
			<NavOption href='/#'>{`ys[kd&ifjp;`}</NavOption>
			<SocialMedia className='gap-x-3.5' />
		</ul>
	);
}
