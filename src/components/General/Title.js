import React from 'react';

export default function Title({ children }) {
	return (
		<h2 className='text-7xl font-kruti-bold text-center text-transparent bg-gradient-to-b from-black to-brown-300 bg-clip-text'>
			{children}
		</h2>
	);
}
