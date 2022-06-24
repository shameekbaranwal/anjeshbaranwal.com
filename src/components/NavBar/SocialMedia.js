import React from 'react';

import SocialIcon from './SocialIcon.js';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GmailIcon from '../../assets/icons/gmail.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';

export default function SocialMedia({ className }) {
	return (
		<li className={`flex justify-center items-center ${className}`}>
			<SocialIcon
				href={'https://facebook.com/anjeshbnl'}
				icon={FacebookIcon}
				name='Facebook'
			/>
			<SocialIcon
				href={'mailto:anjeshbaranwal@gmail.com'}
				icon={GmailIcon}
				name='Gmail'
			/>
			<SocialIcon
				href={'https://twitter.com/anjeshbaranwal'}
				icon={TwitterIcon}
				name='Twitter'
			/>
		</li>
	);
}
