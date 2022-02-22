import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'sass',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/sass.png',
		url: 'https://sass-lang.com/documentation',
	},
	{
		id: 1,
		name: 'postcss',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/postcss.svg',
		url: 'https://postcss.org/',
	},
	{
		id: 2,
		name: 'bootstrap',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/bootstrap.png',
		url: 'https://getbootstrap.com/',
	},
	{
		id: 3,
		name: 'tailwind',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/tailwind.png',
		url: 'https://tailwindcss.com/',
	},
];

const CSS = () => {
	return (
		<div className='css-container front-end-languages-container'>
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
						src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/css/undraw_static_website.svg'
						alt='static-website'
						className='svg'
					/>
				</div>
				<div className='logo-container'>
					{data.map((language) => {
						return (
							<a
								key={language.id}
								href={language.url}
								target='blank'
								className='language-link'
							>
								<img
									className='logo'
									id={language.name}
									src={language.img}
									alt={language.name}
								/>
							</a>
						);
					})}
				</div>
			</div>
			<CTAButton
				text='Find a channel'
				anchor='#front-end-channel'
				color='#ff3434'
			/>
		</div>
	);
};

export default CSS;
