import React from 'react';
import NavOption from './NavOption.js';
import SocialMedia from './SocialMedia.js';
import Hindi from '../../constants/Hindi.js';

export default function VerticalNavOptions({ isOpen, setIsOpen }) {
	return (
		<ul
			className={`fixed md:hidden overflow-hidden bg-platinum shadow-md rounded flex flex-col items-center overflow-x-hidden transition-all duration-500 text-brown-100 w-full z-10 gap-y-6 ${
				isOpen ? 'h-[100%] pt-20' : 'h-[0%] pt-14 list-none'
			}`}
		>
			<NavOption onClick={() => setIsOpen(false)} href='./#Reviews'>
				{Hindi.Reviews}
			</NavOption>
			<NavOption onClick={() => setIsOpen(false)} href='./#Foreword'>
				{Hindi.Foreword}
			</NavOption>
			<NavOption onClick={() => setIsOpen(false)} href='./#Preface'>
				{Hindi.Preface}
			</NavOption>
			<NavOption onClick={() => setIsOpen(false)} href='./#Author'>
				{Hindi.Author}
			</NavOption>
			<SocialMedia
				onClick={() => setIsOpen(false)}
				className='mt-12 gap-x-8'
			/>
		</ul>
	);
}
