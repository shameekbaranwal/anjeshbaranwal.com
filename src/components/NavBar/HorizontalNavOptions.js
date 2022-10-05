import React from 'react';

import Hindi from '../../constants/Hindi.js';
import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';
import ReviewHeadingText from '../General/ReviewHeadingText.js';

export default function HorizontalNavOptions() {
	return (
		<ul className='items-center justify-center hidden md:flex gap-x-5 lg:gap-x-8 xl:gap-x-14'>
			<NavOption
				href='https://garudabooks.com/sangachchhadhvam-sindhu-tat-ka-anaam-gaaon'
				newtab
			>
				{Hindi.BuyNow}
			</NavOption>
			<NavOption href='./#Reviews'>
				<ReviewHeadingText />
			</NavOption>
			<NavOption newtab href='./#Foreword'>
				{Hindi.Foreword}
			</NavOption>
			<NavOption href='./#Preface'>{Hindi.Preface}</NavOption>
			<NavOption href='./#Author'>{Hindi.Author}</NavOption>
			<SocialMedia className='gap-x-1 lg:gap-x-6' />
		</ul>
	);
}
