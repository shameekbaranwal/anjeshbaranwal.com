import React from 'react';

const BookWindow = () => {
	return (
		<div className='h-[75vh] md:h-[90vh] shadow-platinum shadow-lg bg-transparent w-full flex flex-col justify-between lg:hidden'>
			<div className='h-[20px] w-full bg-gradient-to-b from-platinum via-platinum to-transparent opacity-[80%] mix-blend-lighten'></div>
			<div className='h-[20px] w-full relative bg-gradient-to-b from-transparent via-platinum to-platinum opacity-[100%] mix-blend-lighten'></div>
		</div>
	);
};

export default BookWindow;
