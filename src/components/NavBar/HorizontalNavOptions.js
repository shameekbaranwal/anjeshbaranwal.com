import React from 'react';

import Hindi from '../../constants/Hindi.js';
import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';

export default function HorizontalNavOptions() {
	return (
		<ul className='items-center justify-center hidden md:flex gap-x-6 lg:gap-x-10'>
			<NavOption href='./#Reviews'>{Hindi.Reviews}</NavOption>
			<NavOption href='./#Foreword'>{Hindi.Foreword}</NavOption>
			<NavOption href='./#Preface'>{Hindi.Preface}</NavOption>
			<NavOption href='./#Author'>{Hindi.Author}</NavOption>
			<SocialMedia className='gap-x-3.5 lg:gap-x-6' />
		</ul>
	);
}
