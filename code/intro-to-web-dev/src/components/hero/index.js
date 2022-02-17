import React from 'react';

const Hero = () => {
	return (
		<section className='hero-section' id='hero'>
			<div className='hero-container'>
				<div className='hero-text-container'>
					<p className='small-text'>
						create your
						<span id='first-website'> first website</span>
						<span id='yourself'> yourself</span>
					</p>
					<h1 className='big-text' id='learn'>
						learn it yourself
					</h1>
					<h1 className='big-text' id='code'>
						code it yourself
					</h1>
					<h1 className='big-text' id='build'>
						build it yourself
					</h1>
				</div>
			</div>
			<a
				className='btn'
				href='#tech'
				onClick={() => {
					return false;
				}}
			>
				<i className='fa fa-solid fa-chevron-down'></i>
			</a>
		</section>
	);
};

export default Hero;
