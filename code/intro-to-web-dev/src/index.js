import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';

import Nav from './components/nav';
import Hero from './components/hero';
import STTButton from './components/buttons/stt-button';
import Tech from './components/tech';
import Channel from './components/channel';
import Footer from './components/footer';

ReactDOM.render(
	<React.StrictMode>
		<Nav />
		<Hero />
		<STTButton />
		<main>
			<Tech />
			<Channel />
		</main>
		<Footer />
	</React.StrictMode>,
	document.getElementById('root')
);
