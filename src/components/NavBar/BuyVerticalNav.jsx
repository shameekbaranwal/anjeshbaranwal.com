import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import amazonImage from '../../assets/images/amazon.png';
import garudaImage from '../../assets/images/garuda.png';
import padhegaIndiaImage from '../../assets/images/padhegaindia.png';
import flipkartImage from '../../assets/images/flipkart.png';
import Hindi from '../../constants/Hindi.js';
import BuyOption from '../General/BuyOption';

export default function BuyVerticalNav({ closeNavBar }) {
	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<div className={`flex items-center justify-center relative`}>
				<p className='text-3xl text-center transition-all duration-75 font-kokilab'>
					{Hindi.BuyNow}
				</p>
				<ChevronDownIcon className='absolute w-6 h-6 -right-8' />
			</div>
			<div className='flex flex-col items-center justify-center w-56 mt-6 gap-y-5'>
				<BuyOption
					img={padhegaIndiaImage}
					name={'Padhega India'}
					className='bg-hotgreen'
					href='https://www.padhegaindia.in/product/san-gachadhvam/'
					onClick={closeNavBar}
				/>
				<BuyOption
					img={garudaImage}
					name={'Garuda Prakashan'}
					className='bg-hotred'
					href='https://garudabooks.com/sangachchhadhvam-sindhu-tat-ka-anaam-gaaon'
					onClick={closeNavBar}
				/>
				<BuyOption
					img={amazonImage}
					name={'Amazon'}
					className='bg-hotorange'
					href='https://amzn.eu/d/g5MKH5J'
					onClick={closeNavBar}
				/>
				<BuyOption
					img={flipkartImage}
					name='Flipkart'
					className='bg-hotblue'
					href='https://dl.flipkart.com/s/hOZsyquuuN'
					onClick={closeNavBar}
				/>
			</div>
		</div>
	);
}
