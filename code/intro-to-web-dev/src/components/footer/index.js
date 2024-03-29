import React from 'react';

const Footer = () => {
	return (
		<section className='footer-container' id='footer'>
			<div className='social-container'>
				<a
					href='https://mindx.edu.vn/'
					target='blank'
					className='social-link'
				>
					<i className='fas fa-globe'></i>
				</a>
				<a
					href='https://www.youtube.com/channel/UCkuxJcFwR-iFgThUPKwM_JA'
					target='blank'
					className='social-link'
				>
					<i className='fab fa-youtube'></i>
				</a>
				<a
					href='https://www.facebook.com/MindX.Teen/'
					target='blank'
					className='social-link'
				>
					<i className='fab fa-facebook'></i>
				</a>
			</div>
			<p className='copyrights'>
				&copy; Copyright MindX {new Date().getFullYear()}
			</p>
		</section>
	);
};

export default React.memo(Footer);
