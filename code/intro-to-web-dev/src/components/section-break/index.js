import React, { useRef } from 'react';

const SectionBreak = () => {
	const devManRef = useRef(null);
	const devWomanRef = useRef(null);

	// window.addEventListener('scroll', (e) => {
	// 	if (devManRef.current != null) {
	// 		devManRef.current.style.transform =
	// 			'translateY(' + window.scrollY * 0.003 + 'px' + ')';
	// 	}
	// if (devWomanRef.current != null) {
	// 	console.log(window.scrollY, window.innerHeight);
	// 	devWomanRef.current.style.transform =
	// 		'translateY(' +
	// 		-((window.scrollY - window.innerHeight / 2) / window.innerHeight) *
	// 			10 +
	// 		'%' +
	// 		')';
	// }
	// });

	return (
		<div className='section-break-container'>
			<img
				src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/section-break/dev-man.svg'
				alt='dev-man'
				ref={devManRef}
			/>
			<img
				src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/section-break/dev-woman.svg'
				alt='dev-woman'
				ref={devWomanRef}
			/>
		</div>
	);
};

export default React.memo(SectionBreak);
