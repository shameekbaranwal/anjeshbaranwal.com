import React from 'react';

import './App.css';
import NavBar from './NavBar/';
import Hero from './Hero/';

export default function App() {
	return (
		<div className='text-2xl'>
			<NavBar />
			<Hero />
		</div>
	);
}
