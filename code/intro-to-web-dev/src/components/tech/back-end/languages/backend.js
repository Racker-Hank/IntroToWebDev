import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const BackEnd = () => {
	return (
		<div className='backend-container back-end-languages-container'>
			<div className='text-container'>
				<h3 className='title'>Backend Technologies</h3>
				<p className='subtitle'>
					<span className='red-text'>Languages</span> and
					<span className='blue-text'>frameworks</span> to support you
				</p>
			</div>
			<div className='languages-container'></div>
			<CTAButton text='Find a channel' anchor='/' color='#ff3434' />
		</div>
	);
};

export default BackEnd;
