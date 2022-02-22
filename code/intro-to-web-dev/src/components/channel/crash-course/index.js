import React from 'react';

const data = [
	{
		id: 0,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/crash-courses/crash-course-1.png',
		url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88',
	},
	{
		id: 1,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/crash-courses/crash-course-2.png',
		url: 'https://www.youtube.com/playlist?list=PLkwxH9e_vrAJ0WbEsFA9W3I1W-g_BTsbt',
	},
	{
		id: 2,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/crash-courses/crash-course-3.png',
		url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC',
	},
	{
		id: 3,
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/channel/crash-courses/crash-course-4.png',
		url: 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbmGQoa3vFjeRbRADAOC9drk',
	},
];

const CrashCourses = () => {
	return (
		<section
			className='crash-course channels-container section-with-background'
			id='crash-course'
		>
			<h2 className='section-name section-with-background-name'>
				crash courses to get you started
			</h2>
			<div className='channel-img-container'>
				{data.map((channel) => {
					return (
						<a href={channel.url} target='blank' className='channel-link'>
							<img src={channel.img} alt='' className='channel-img' />
						</a>
					);
				})}
			</div>
			<p className='many-more'>and many many more..</p>
		</section>
	);
};

export default CrashCourses;
