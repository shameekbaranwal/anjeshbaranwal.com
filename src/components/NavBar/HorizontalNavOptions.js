import React from 'react';

import Hindi from '../../constants/Hindi.js';
import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';

export default function HorizontalNavOptions() {
	return (
		<ul className='hidden md:flex justify-center items-center gap-x-6 lg:gap-x-10'>
			<NavOption href='./#'>{Hindi.Preface}</NavOption>
			<NavOption href='./#'>{Hindi.Foreword}</NavOption>
			<NavOption href='./#'>{Hindi.Reviews}</NavOption>
			<NavOption href='./#'>{Hindi.Author}</NavOption>
			<SocialMedia className='gap-x-3.5 lg:gap-x-6' />
		</ul>
	);
}
