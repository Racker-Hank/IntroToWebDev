import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';

import Nav from './components/nav';
import Hero from './components/hero';
import Tech from './components/tech';

ReactDOM.render(
	<React.StrictMode>
		<Nav />
		<Hero />
		<Tech />
	</React.StrictMode>,
	document.getElementById('root')
);
