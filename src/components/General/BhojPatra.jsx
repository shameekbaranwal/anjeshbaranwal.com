import React from 'react';

import TexturePhone from '../../assets/images/texture_mobile.png';
import TextureDesktop from '../../assets/images/texture_desktop.png';

const BhojPatra = ({ mini, children, className, onClick }) => {
	return (
		<div
			className={
				'relative max-h-[80vh] md:max-h-full md:w-5/6 ' + className
			}
			onClick={onClick}
		>
			<img
				src={TexturePhone}
				alt=''
				className={`w-full lg:hidden ${
					mini ? 'md:h-[85vh] h-[100vh]' : 'h-[90vh] md:h-[100vh]'
				}`}
			/>
			<img
				src={TextureDesktop}
				alt=''
				className={`w-full hidden lg:block ${
					mini ? 'lg:h-[95vh] xl:h-[75vh]' : 'h-[90vh] md:h-[100vh]'
				}`}
			/>
			<div className='px-10 md:px-20 py-[2vh] md:py-[5vh] mt-10 md:mt-14 overflow-y-scroll absolute top-0 h-full md:h-[80%] no-scrollbar w-full'>
				{children}
			</div>
		</div>
	);
};

export default BhojPatra;
