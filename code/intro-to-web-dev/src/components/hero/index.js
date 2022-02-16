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
			<button className='btn'>
				<a href='#hero'>
					<i class='fa fa-solid fa-chevron-down'></i>
				</a>
			</button>
		</section>
	);
};

export default Hero;
