import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'sass',
		url: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/sass.png',
	},
	{
		id: 1,
		name: 'postcss',
		url: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/postcss.svg',
	},
	{
		id: 2,
		name: 'bootstrap',
		url: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/bootstrap.png',
	},
	{
		id: 3,
		name: 'tailwind',
		url: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/tailwind.png',
	},
];

const CSS = () => {
	return (
		<div className='css-container front-end-language-container'>
			<div className='text-container'>
				<h3 className='title'>level up your CSS game</h3>
				<p className='subtitle'>
					<span className='red-text'>Fun things</span> you can check out
					after learning{' '}
					<code className='language-name' id='css'>
						CSS
					</code>
				</p>
			</div>
			<div className='languages-container'>
				<div className='img-container'>
					<img
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/undraw_static_website.svg'
						alt='static-website'
						className='svg'
					/>
				</div>
				<div className='logo-container'>
					{data.map((language) => {
						return (
							<img
								className='logo'
								id={language.name}
								src={language.url}
								alt={language.name}
							/>
						);
					})}
				</div>
			</div>
			<CTAButton text='Find a channel' anchor='/' color='#ff3434' />
		</div>
	);
};

export default CSS;
