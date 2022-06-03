import React from 'react';

import NavButton from './NavButton.js';
import NavIcon from './NavIcon.js';
import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GmailIcon from '../../assets/icons/gmail.svg';

export default function NavBar() {
	return (
		<div className='flex flex-row bg-primary justify-center md:justify-between items-center py-4 snap-start'>
			<h1
				className='font-cinzel text-lg pl-12'
				style={{ letterSpacing: '0.4em' }}
			>
				Anjesh&nbsp;&nbsp;Baranwal
			</h1>
			<div className='hidden md:flex flex-row justify-center items-center'>
				<NavButton title='HOME' href='#' />
				<NavButton title='ABOUT' href='#' />
				<NavButton title='COLLECTION' href='#' />
				<NavIcon title='Instagram' href='#' icon={InstagramIcon} />
				<NavIcon title='Facebook' href='#' icon={FacebookIcon} />
				<NavIcon title='Gmail' href='#' icon={GmailIcon} />
			</div>
		</div>
	);
}
