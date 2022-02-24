import React from 'react';
import { useInView } from 'react-intersection-observer';

// jsx
import Nav from './components/nav';
import Hero from './components/hero';
import ThreeDRandom from './components/3d-random';
import STTButton from './components/buttons/stt-button';
import Tech from './components/tech';
import Channel from './components/channel';
import Footer from './components/footer';

const App = () => {
	const [heroRef, heroInView] = useInView({
		threshold: 0.01,
	});
	const [techRef, techInView] = useInView({
		threshold: 0.1,
	});
	const [channelRef, channelInView] = useInView({
		threshold: 0.05,
	});

	return (
		<div className='mindx-intro-to-web-dev' id='mindx-intro-to-web-dev'>
			<Nav
				heroInView={heroInView}
				techInView={techInView}
				channelInView={channelInView}
			/>
			<Hero ref={heroRef} />
			<ThreeDRandom />
			<STTButton />
			<main>
				<Tech ref={techRef} />
				<Channel ref={channelRef} />
			</main>
			<Footer />
		</div>
	);
};

export default App;
