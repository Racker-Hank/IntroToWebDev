import React from 'react';

const data = [
	{
		id: 0,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/front-end/front-end-1.png',
		url: 'https://www.youtube.com/kepowob',
	},
	{
		id: 1,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/front-end/front-end-2.png',
		url: 'https://www.youtube.com/c/DesignCourse',
	},
];

const FrontEnd = () => {
	return (
		<section
			className='front-end-channel channels-container section-with-background'
			id='front-end-channel'
		>
			<h2 className='section-name section-with-background-name'>
				creative world of front end
			</h2>
			<div className='channel-img-container'>
				{data.map((channel) => {
					return (
						<a
							href={channel.url}
							target='blank'
							className='channel-link'
							key={channel.id}
						>
							<img src={channel.img} alt='' className='channel-img' />
						</a>
					);
				})}
			</div>
			<p className='many-more'>and many many more..</p>
		</section>
	);
};

export default FrontEnd;
