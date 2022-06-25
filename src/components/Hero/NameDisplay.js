import React from 'react';
import Hindi from '../../constants/Hindi.js';

export default function NameDisplay() {
	return (
		<>
			<h2 className='font-kokila text-5xl mt-4 text-transparent bg-clip-text bg-gradient-to-b from-black to-brown-300 md:hidden'>
				{Hindi.Anjesh + ' ' + Hindi.Baranwal}
			</h2>
			<div className='flex flex-col'>
				<h2 className='hidden font-kokila text-center text-8xl text-black md:block'>
					{Hindi.Anjesh}
				</h2>
				<h2 className='hidden font-kokila text-center md:block text-8xl text-brown-300'>
					{Hindi.Baranwal}
				</h2>
			</div>
		</>
	);
}
