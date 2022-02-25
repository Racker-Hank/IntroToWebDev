import React, { useEffect, useRef } from 'react';

const Hero = React.forwardRef((props, ref) => {
	const heroImgRef = useRef(null);

	useEffect(() => {
		window.addEventListener('mousemove', mouseEffect);

		return () => {
			window.removeEventListener('mousemove', mouseEffect);
		};
	});

	const mouseEffect = (e) => {
		if (heroImgRef.current != null) {
			heroImgRef.current.style.transform =
				'translate(' +
				e.pageX * -0.02 +
				'px' +
				',' +
				e.pageY * -0.02 +
				'px' +
				')';
		}
	};

	return (
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
				<div className='hero-img-container'>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/hero/walk-up-the-stair.svg'
						alt='walk-up-the-stair'
						className='walk-up-the-stair'
						ref={heroImgRef}
					/>
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
	);
});

export default React.memo(Hero);
