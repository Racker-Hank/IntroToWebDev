import React, { useEffect, useRef } from 'react';

const Hero = React.forwardRef((props, ref) => {
	const heroImg1Ref = useRef(null);
	const heroImg2Ref = useRef(null);
	const heroImg3Ref = useRef(null);

	useEffect(() => {
		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	});

	useEffect(() => {
		window.addEventListener('scroll', scroll);

		return () => {
			window.removeEventListener('scroll', scroll);
		};
	});

	const mouseMove = (e) => {
		let translate =
			Math.round(e.pageX * -0.02) +
			'px' +
			',' +
			Math.round(e.pageY * -0.02) +
			'px';
		if (heroImg1Ref.current != null) {
			heroImg1Ref.current.style.transform = 'translate(' + translate + ')';
		}
		if (heroImg2Ref.current != null) {
			heroImg2Ref.current.style.transform = 'translate(' + translate + ')';
		}
		if (heroImg3Ref.current != null) {
			heroImg3Ref.current.style.transform = 'translate(' + translate + ')';
		}
	};

	const scroll = (e) => {
		let translate = Math.round(window.scrollY * 0.25);
		if (heroImg1Ref.current != null) {
			heroImg1Ref.current.style.left = '-' + translate + 'px';
		}
		if (heroImg3Ref.current != null) {
			heroImg3Ref.current.style.left = translate + 115 + 'px';
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
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/hero/book-1.svg'
						alt='walk-up-the-stair'
						className='walk-up-the-stair'
						ref={heroImg1Ref}
						id='book-1'
					/>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/hero/book-2-person.svg'
						alt='walk-up-the-stair'
						className='walk-up-the-stair'
						ref={heroImg2Ref}
						id='book-2'
					/>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/hero/book-3.svg'
						alt='walk-up-the-stair'
						className='walk-up-the-stair'
						ref={heroImg3Ref}
						id='book-3'
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
