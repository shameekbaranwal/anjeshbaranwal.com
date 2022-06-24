import NavBar from './components/NavBar';
import Hero from './components/Hero';

const App = () => {
	return (
		<div className='w-screen h-full overflow-x-hidden max-w-[100%]'>
			<NavBar />
			<div className='pt-14 h-full min-h-screen'>
				<Hero />
			</div>
		</div>
	);
};

export default App;
