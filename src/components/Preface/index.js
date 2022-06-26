import React from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title';
import BhojPatra from '../General/BhojPatra.js';

export default function Preface() {
	return (
		<div className='bg-platinum bg-opacity-[85%] flex flex-col justify-center items-center relative'>
			<div className='h-20 w-full -z-10'></div>
			<Title>{Hindi.Preface}</Title>
			<BhojPatra>
				<p className='font-kruti text-xl text-center'>
					{Hindi.PrefaceContent}
				</p>
			</BhojPatra>
		</div>
	);
}
