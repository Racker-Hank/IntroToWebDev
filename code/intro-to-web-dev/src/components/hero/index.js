import React from 'react';

const Hero = () => {
	return (
		<section className='hero-section' id='hero'>
			<div className='hero-container'>
				<div className='hero-text-container'>
					<div className='small-text-container'>
						<p className='small-text'>
							create your
							<span id='first-website'> first website</span>
							<span id='yourself'> yourself</span>
						</p>
						<svg
							id='line4'
							width='61'
							height='7'
							viewBox='0 0 61 7'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.29899 5.0551C28.3748 -2.12519 32.5318 10.3458 59.3634 2.03182'
								stroke='#5378FF'
								stroke-width='3'
								stroke-linecap='round'
							/>
						</svg>
					</div>
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
