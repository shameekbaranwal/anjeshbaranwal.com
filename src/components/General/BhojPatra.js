import React from 'react';

import TexturePhone from '../../assets/images/texture_mobile.png';
import TextureDesktop from '../../assets/images/texture_desktop.png';

const BhojPatra = ({ mini, children }) => {
	return (
		<div className='relative max-h-[80vh] md:max-h-full md:w-5/6'>
			<img
				src={TexturePhone}
				alt=''
				className={`h-[90vh] w-full lg:hidden ${
					mini ? 'md:h-[75vh]' : 'md:h-[100vh]'
				}`}
			/>
			<img
				src={TextureDesktop}
				alt=''
				className={`w-full hidden lg:block ${
					mini ? 'lg:h-[85vh] xl:h-[70vh]' : 'h-[90vh] md:h-[100vh]'
				}`}
			/>
			<div className='px-10 md:px-20 py-[2vh] md:py-[5vh] mt-10 md:mt-14 overflow-y-scroll absolute top-0 h-full md:h-[85%] no-scrollbar'>
				{children}
			</div>
		</div>
	);
};

export default BhojPatra;
