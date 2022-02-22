import React from 'react';

const Roadmap = () => {
	return (
		<section
			className='roadmap channels-container section-with-background'
			id='roadmap'
		>
			<h2 className='section-name section-with-background-name'>
				roadmaps to show you da wei
			</h2>
			<div className='channel-img-container'>
				<a
					href='https://www.youtube.com/results?search_query=web+dev+roadmap'
					target='blank'
					className='channel-link'
					// id='roadmap-link'
				>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/roadmap/roadmap-2.png'
						alt=''
						className='channel-img'
						id='roadmap-2'
					/>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/roadmap/roadmap-1.png'
						alt=''
						className='channel-img'
						id='roadmap-1'
					/>
				</a>
			</div>
		</section>
	);
};

export default Roadmap;
