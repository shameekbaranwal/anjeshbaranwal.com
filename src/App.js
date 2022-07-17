import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Overlay from './components/General/Overlay';
import BookWindow from './components/General/BookWindow';
import Preface from './components/Preface';
import Foreword from './components/Foreword/index.js';
import AboutAuthor from './components/AboutAuthor/index.js';
import Reviews from './components/Reviews/index.js';

const App = () => {
	const [show, setShow] = useState(true);
	return (
		<div className='w-screen h-full overflow-x-hidden max-w-[100%]'>
			<NavBar />
			<div className='relative h-full min-h-screen pt-14'>
				<Overlay show={show} setShow={setShow} />
				<Hero show={show} />
				<BookWindow />
				<Reviews />
				<Foreword />
				<Preface />
				<AboutAuthor />
				<div className='h-screen bg-platinum bg-opacity-[85%] lg:bg-opacity-100'></div>
			</div>
		</div>
	);
};

export default App;
