import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import BuyOption from './BuyOption.js';
import amazonImage from '../../assets/images/amazon.png';
import garudaImage from '../../assets/images/garuda.png';
import padhegaIndiaImage from '../../assets/images/padhegaindia.png';

export default function BuyNavDropdown({ children }) {
	return (
		<Menu as='div' className='relative inline-block w-full text-left'>
			<div className='w-full'>{children}</div>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='absolute right-0 z-10 w-64 px-4 py-2 mt-2 origin-top-right rounded-md shadow-lg bg-platinum focus:outline-none gap-y-4'>
					<div className=''>
						<Menu.Item>
							{({ active }) => (
								<BuyOption
									img={amazonImage}
									name={'Amazon'}
									className='my-2.5 bg-hotorange'
									href='https://amzn.eu/d/g5MKH5J'
								/>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<BuyOption
									img={garudaImage}
									name={'Garuda Prakashan'}
									className='my-2.5 bg-hotred'
									href='https://garudabooks.com/sangachchhadhvam-sindhu-tat-ka-anaam-gaaon'
								/>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<BuyOption
									img={padhegaIndiaImage}
									name={'Padhega India'}
									className='my-2.5 bg-hotgreen'
									href='http://rzp.io/l/Sangachadwam'
								/>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
