import React from 'react';

import CSS from './css';
import JS from './js';

const FrontEndLanguages = () => {
	return (
		<section className='front-end-languages'>
			<div className='languages-container'>
				<h2 className='section-name section-with-background-name'>
					Front End
				</h2>
				<CSS />
				<JS />
				<p className='many-more'>and many many more..</p>
			</div>
		</section>
	);
};

export default FrontEndLanguages;
