import React from 'react';

import './App.css';
import NavBar from './NavBar/';
import Hero from './Hero/';
import AboutBook from './AboutBook/';
import AboutAuthor from './AboutAuthor/index.js';

export default function App() {
	return (
		<div className='text-2xl w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-primary'>
			<NavBar />
			<Hero />
			<AboutBook />
			<AboutAuthor />
		</div>
	);
}
