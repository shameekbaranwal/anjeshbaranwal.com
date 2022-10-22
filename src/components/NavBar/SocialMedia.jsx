import React from 'react';

import SocialIcon from './SocialIcon';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GmailIcon from '../../assets/icons/gmail.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';

export default function SocialMedia({ className, onClick }) {
	return (
		<li className={`flex justify-center items-center ${className}`}>
			<SocialIcon
				href={'https://facebook.com/anjeshbnl'}
				icon={FacebookIcon}
				name='Facebook'
				onClick={onClick}
			/>
			<SocialIcon
				href={'mailto:anjeshbaranwal@gmail.com'}
				icon={GmailIcon}
				name='Gmail'
				onClick={onClick}
			/>
			<SocialIcon
				href={'https://twitter.com/anjeshbaranwal'}
				icon={TwitterIcon}
				name='Twitter'
				onClick={onClick}
			/>
		</li>
	);
}
