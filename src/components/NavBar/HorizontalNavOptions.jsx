import React from 'react';

import Hindi from '../../constants/Hindi.js';
import NavOption from './NavOption';
import SocialMedia from './SocialMedia';
import BuyHorizontalNav from './BuyHorizontalNav';

export default function HorizontalNavOptions() {
	return (
		<ul className='items-center justify-center hidden md:flex gap-x-5 lg:gap-x-8 xl:gap-x-14'>
			<BuyHorizontalNav />
			<NavOption href='./#Reviews'>
				{Hindi.Reviews1} / {Hindi.Reviews2}
			</NavOption>
			<NavOption href='./#Foreword'>{Hindi.Foreword}</NavOption>
			<NavOption href='./#Preface'>{Hindi.Preface}</NavOption>
			<NavOption href='./#Author'>{Hindi.Author}</NavOption>
			<SocialMedia className='gap-x-1 lg:gap-x-6' />
		</ul>
	);
}
