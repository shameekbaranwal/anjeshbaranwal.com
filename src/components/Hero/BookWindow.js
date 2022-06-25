import React from 'react';

const BookWindow = () => {
	return (
		<div className='h-[75vh] md:h-[90vh] shadow-platinum shadow-lg bg-transparent w-full flex flex-col justify-between'>
			<div className='h-[100px] w-full bg-gradient-to-b from-platinum via-platinum to-transparent opacity-[85%] mix-blend-lighten'></div>
			<div className='h-[100px] w-full relative top-1 bg-gradient-to-b from-transparent via-platinum to-platinum opacity-[85%] mix-blend-lighten'></div>
		</div>
	);
};

export default BookWindow;
