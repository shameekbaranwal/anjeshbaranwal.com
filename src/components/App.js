import React from 'react';

import './App.css';
import NavBar from './NavBar/';
import Hero from './Hero/';
import AboutBook from './AboutBook/';

export default function App() {
	return (
		<div className='text-2xl w-full h-full'>
			<NavBar />
			<Hero />
			<AboutBook />
		</div>
	);
}
