import React from 'react';

import CSS from './css';
import JS from './js';

const FrontEndLanguages = () => {
	return (
		<div
			className='front-end-languages section-with-background'
			id='front-end-languages'
		>
			<h2 className='section-name section-with-background-name'>
				Front End
			</h2>
			<div className='grid-container'>
				<CSS />
				<JS />
			</div>
			<p className='many-more'>and many many more..</p>
		</div>
	);
};

export default React.memo(FrontEndLanguages);
