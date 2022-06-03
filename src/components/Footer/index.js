import React from 'react';

import InstagramIcon from '../../assets/icons/instagram.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GmailIcon from '../../assets/icons/gmail.svg';
import NavIcon from '../NavBar/NavIcon.js';

export default function Footer() {
	return (
		<div className='snap-start w-full bg-transparent flex justify-center items-center'>
			<NavIcon title='Instagram' href='#' icon={InstagramIcon} />
			<NavIcon title='Facebook' href='#' icon={FacebookIcon} />
			<NavIcon title='Gmail' href='#' icon={GmailIcon} />
		</div>
	);
}
