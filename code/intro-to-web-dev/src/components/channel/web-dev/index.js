import React from 'react';

const data = [
	{
		id: 0,
		name: 'traversy',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-1.png',
		url: 'https://www.youtube.com/c/TraversyMedia',
	},
	{
		id: 1,
		name: 'wds',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-2.png',
		url: 'https://www.youtube.com/c/WebDevSimplified',
	},
	{
		id: 2,
		name: 'stackr',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-3.png',
		url: 'https://www.youtube.com/c/codeSTACKr',
	},
	{
		id: 3,
		name: 'fireship',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-4.png',
		url: 'https://www.youtube.com/c/Fireship',
	},
	{
		id: 4,
		name: 'quick',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-5.png',
		url: 'https://www.youtube.com/c/JamesQQuick',
	},
	{
		id: 5,
		name: 'mastery',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-6.png',
		url: 'https://www.youtube.com/c/JavaScriptMastery',
	},
	{
		id: 6,
		name: 'ed',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-7.png',
		url: 'https://www.youtube.com/c/DevEd',
	},
	{
		id: 7,
		name: 'addict',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-8.png',
		url: 'https://www.youtube.com/c/CodingAddict',
	},
	{
		id: 8,
		name: 'f8',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/web-dev/web-dev-9.png',
		url: 'https://www.youtube.com/c/F8VNOfficial',
	},
];

const WebDev = () => {
	return (
		<section
			className='web-dev-channel channels-container section-with-background'
			id='web-dev-channel'
		>
			<h2 className='section-name section-with-background-name'>
				all things web dev
			</h2>
			<div className='channel-img-container'>
				{data.map((channel) => {
					return (
						<a
							href={channel.url}
							target='blank'
							className='channel-link'
							id={channel.name}
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

export default WebDev;
