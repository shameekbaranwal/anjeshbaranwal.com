import React from 'react';

import { Menu } from '@headlessui/react';
import Hindi from '../../constants/Hindi.js';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import BuyNavDropdown from '../General/BuyNavDropdown';

export default function BuyHorizontalNav() {
	return (
		<li className='flex items-center justify-center'>
			<BuyNavDropdown>
				<Menu.Button className='flex items-center justify-center text-center transition-all duration-75 text-3xl font-kokilab md:text-xl lg:text-2xl hover:text-3xl md:hover:text-2xl lg:hover:text-2xl hover:underline'>
					{Hindi.BuyNow}
					<ChevronDownIcon
						className='w-5 h-5 ml-2 -mr-1'
						aria-hidden='true'
					/>
				</Menu.Button>
			</BuyNavDropdown>
		</li>
	);
}
