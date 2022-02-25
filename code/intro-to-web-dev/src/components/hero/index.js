import React from 'react';

const Hero = React.forwardRef((props, ref) => (
	<section className='hero-section' id='top' ref={ref}>
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
				<h1 className='big-text' id='code' contentEditable='true'>
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
			<i className='fas fa-solid fa-chevron-down'></i>
		</a>
	</section>
));

export default React.memo(Hero);
