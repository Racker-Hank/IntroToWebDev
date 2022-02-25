import React, { useRef } from 'react';

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

	window.addEventListener('mousemove', (e) => {
		if (cubeRef.current != null) {
			cubeRef.current.style.transform =
				'translate(' +
				e.pageX * 0.05 +
				'px' +
				',' +
				e.pageY * 0.05 +
				'px' +
				')';
		}
		if (sphereRef.current != null) {
			sphereRef.current.style.transform =
				'translate(' +
				e.pageX * 0.1 +
				'px' +
				',' +
				e.pageY * 0.1 +
				'px' +
				')';
		}
		if (donutRef.current != null) {
			donutRef.current.style.transform =
				'translate(' +
				e.pageX * 0.025 +
				'px' +
				',' +
				e.pageY * 0.025 +
				'px' +
				')';
		}
	});

	return (
		<div className='three-d-container'>
			{data.map((shape) => {
				return (
					<img
						key={shape.id}
						src={shape.img}
						alt={shape.name}
						className='three-d-shape'
						id={shape.name}
						ref={refs[shape.id]}
					/>
				);
			})}
		</div>
	);
};

export default ThreeDRandom;
