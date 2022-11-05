import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Overlay from './components/General/Overlay';
import BookWindow from './components/General/BookWindow';
import Preface from './components/Preface';
import Foreword from './components/Foreword';
import AboutAuthor from './components/AboutAuthor';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import TwitterFeed from './components/TwitterFeed';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainAppComponent />}></Route>
			<Route path='/buy' element={<BuyRedirect />} />
			<Route path='/facebook' element={<FacebookRedirect />} />
			<Route path='/twitter' element={<TwitterRedirect />} />
			<Route path='/contact' element={<GmailRedirect />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

const MainAppComponent = () => {
	const [show, setShow] = useState(true);
	return (
		<div className='w-screen h-full overflow-x-hidden max-w-[100%]'>
			<NavBar />
			<div className='relative h-full min-h-screen pt-14'>
				<Overlay show={show} setShow={setShow} />
				<Hero show={show} />
				<BookWindow />
				<Reviews />
				<TwitterFeed />
				<Foreword />
				<Preface />
				<AboutAuthor />
				<Footer />
			</div>
		</div>
	);
};

const BuyRedirect = () =>
	window.location.replace(
		'https://garudabooks.com/sangachchhadhvam-sindhu-tat-ka-anaam-gaaon',
	);

const FacebookRedirect = () =>
	window.location.replace('https://facebook.com/anjeshbnl');

const GmailRedirect = () =>
	window.location.replace('mailto:anjeshbaranwal@gmail.com');

const TwitterRedirect = () =>
	window.location.replace('https://twitter.com/anjeshbaranwal');

export default App;
