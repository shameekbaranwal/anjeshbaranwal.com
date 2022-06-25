import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Overlay from './components/Hero/Overlay';
import BookWindow from './components/Hero/BookWindow';

const App = () => {
	const [show, setShow] = useState(true);
	return (
		<div className='w-screen h-full overflow-x-hidden max-w-[100%]'>
			<NavBar />
			<div className='pt-14 h-full min-h-screen relative'>
				<Overlay show={show} setShow={setShow} />
				<Hero show={show} />
				<BookWindow />
				<div className='h-screen bg-platinum bg-opacity-[85%]'></div>
			</div>
		</div>
	);
};

export default App;
