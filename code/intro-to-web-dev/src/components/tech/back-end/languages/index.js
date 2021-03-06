import React from 'react';

import BackEnd from './backend';
import Database from './database';

const BackEndLanguages = () => {
	return (
		<div
			className='back-end-languages section-with-background'
			id='back-end-languages'
		>
			<h2 className='section-name section-with-background-name'>Back End</h2>
			<div className='grid-container'>
				<BackEnd />
				<Database />
			</div>
			<p className='many-more'>and many many more..</p>
		</div>
	);
};

export default React.memo(BackEndLanguages);
