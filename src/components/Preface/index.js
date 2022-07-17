import React from 'react';

import Hindi from '../../constants/Hindi.js';
import Title from '../General/Title';
import BhojPatra from '../General/BhojPatra.js';

export default function Preface() {
	return (
		<div
			className='relative flex flex-col items-center justify-center bg-platinum bg-opacity-[80%] lg:bg-opacity-100 py-24 lg:py-12'
			id='Preface'
		>
			<Title>{Hindi.Preface}</Title>
			<BhojPatra>
				<p className='text-xl text-center font-kruti lg:text-3xl'>
					{Hindi.PrefaceContent}
				</p>
			</BhojPatra>
		</div>
	);
}
