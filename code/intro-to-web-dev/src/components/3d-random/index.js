import React, { useEffect, useRef } from 'react';

const data = [
	{
		id: 0,
		name: 'cube',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/3d-random/cube.png',
	},
	{
		id: 1,
		name: 'sphere',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/3d-random/sphere.png',
	},
	{
		id: 2,
		name: 'donut',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/3d-random/donut.png',
	},
];

const ThreeDRandom = () => {
	const cubeRef = useRef(null);
	const sphereRef = useRef(null);
	const donutRef = useRef(null);
	const refs = [cubeRef, sphereRef, donutRef];

	useEffect(() => {
		window.addEventListener('mousemove', mouseEffect);

		return () => {
			window.removeEventListener('mousemove', mouseEffect);
		};
	});

	const mouseEffect = (e) => {
		if (cubeRef.current != null) {
			cubeRef.current.style.transform =
				'translate(' +
				Math.round(e.pageX * 0.05) +
				'px' +
				',' +
				Math.round(e.pageY * 0.05) +
				'px' +
				')';
		}
		if (sphereRef.current != null) {
			sphereRef.current.style.transform =
				'translate(' +
				Math.round(e.pageX * 0.1) +
				'px' +
				',' +
				Math.round(e.pageY * 0.1) +
				'px' +
				')';
		}
		if (donutRef.current != null) {
			donutRef.current.style.transform =
				'translate(' +
				Math.round(e.pageX * 0.025) +
				'px' +
				',' +
				Math.round(e.pageY * 0.025) +
				'px' +
				')';
		}
	};

	const sorry = () => {
		let code = document.getElementById('code');
		code.textContent = 'Sorry 😅';
		setTimeout(() => {
			code.style.opacity = '0';
		}, 5000);
		setTimeout(() => {
			code.textContent = 'Code It Yourself';
			code.style.opacity = '1';
		}, 6000);
	};

	return (
		<div className='three-d-container'>
			{data.map((shape) => {
				return (
					<a
						href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						target='blank'
						key={shape.id}
						className='three-d-shape'
						id={shape.name}
						ref={refs[shape.id]}
						onClick={sorry}
					>
						<img src={shape.img} alt={shape.name} />
					</a>
				);
			})}
		</div>
	);
};

export default ThreeDRandom;
