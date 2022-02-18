import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';

import Nav from './components/nav';
import Hero from './components/hero';
import STTButton from './components/buttons/stt-button';
import Tech from './components/tech';

ReactDOM.render(
	<React.StrictMode>
		<Nav />
		<Hero />
		<STTButton />
		<Tech />
	</React.StrictMode>,
	document.getElementById('root')
);
