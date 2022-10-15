import React from 'react';

import amazonImage from '../../assets/images/amazon.png';
import garudaImage from '../../assets/images/garuda.png';
import padhegaIndiaImage from '../../assets/images/padhegaindia.png';
import Hindi from '../../constants/Hindi.js';
import BuyOption from '../General/BuyOption.js';

export default function BuyVerticalNav({ closeNavBar }) {
	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<div className={`flex items-center justify-center relative`}>
				<p className='text-2xl text-center transition-all duration-75 font-kruti-bold md:text-lg lg:text-2xl'>
					{Hindi.BuyNow}
				</p>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='absolute w-6 h-6 -right-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
					/>
				</svg>
			</div>
			<div className='flex flex-col items-center justify-center w-56 mt-6 gap-y-6'>
				<BuyOption
					img={amazonImage}
					name={'Amazon'}
					className='bg-hotorange'
					href='https://amzn.eu/d/g5MKH5J'
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
					img={padhegaIndiaImage}
					name={'Padhega India'}
					className='bg-hotgreen'
					href='http://rzp.io/l/Sangachadwam'
					onClick={closeNavBar}
				/>
			</div>
		</div>
	);
}
