import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'js',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/js/js.svg',
		url: 'https://www.javascript.com/',
		frameworks: [
			{
				id: 0,
				name: 'node-js',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/js/nodejs.png',
				url: 'https://nodejs.org/en/',
			},
		],
	},
	{
		id: 1,
		name: 'python',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/python/python.svg',
		url: 'https://www.python.org/',
		frameworks: [
			{
				id: 0,
				name: 'django',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/python/django.svg',
				url: 'https://www.djangoproject.com/',
			},
			{
				id: 1,
				name: 'flask',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/python/flask.svg',
				url: 'https://flask.palletsprojects.com/en/2.0.x/',
			},
		],
	},
	{
		id: 2,
		name: 'php',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/php/php.svg',
		url: 'https://www.php.net/',
		frameworks: [
			{
				id: 0,
				name: 'laravel',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/php/laravel.svg',
				url: 'https://laravel.com/',
			},
		],
	},
	{
		id: 3,
		name: 'go',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/go/go.svg',
		url: 'https://go.dev/',
		frameworks: [],
	},
	{
		id: 4,
		name: 'c-sharp',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/csharp/csharp.svg',
		url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
		frameworks: [
			{
				id: 0,
				name: 'dotnet',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/csharp/dotnet.svg',
				url: 'https://dotnet.microsoft.com/en-us/',
			},
		],
	},
	{
		id: 5,
		name: 'ruby',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/ruby/ruby.svg',
		url: 'https://www.ruby-lang.org/en/',
		frameworks: [
			{
				id: 0,
				name: 'ruby-on-rails',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/ruby/rubyonrails.svg',
				url: 'https://rubyonrails.org/',
			},
		],
	},
	{
		id: 6,
		name: 'java',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/java/java.svg',
		url: 'https://www.java.com/en/',
		frameworks: [
			{
				id: 0,
				name: 'spring',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/backend/java/spring.svg',
				url: 'https://spring.io/',
			},
		],
	},
];

const BackEnd = () => {
	return (
		<div className='backend-container back-end-languages-container'>
			<div className='text-container'>
				<h3 className='title'>Backend Technologies</h3>
				<p className='subtitle'>
					<span className='red-text'>Languages</span> and
					<span className='blue-text'> frameworks</span> to power your
					website
				</p>
			</div>
			<div className='languages-container'>
				{data.map((language) => {
					return (
						<div className='language-container' key={language.id}>
							<a
								href={language.url}
								target='blank'
								className='language-link'
							>
								<img
									src={language.img}
									alt={language.name}
									className='language-logo'
									id={language.name}
								/>
							</a>
							<div className='frameworks-container'>
								{language.frameworks.map((framework) => {
									return (
										<a
											key={framework.id}
											href={framework.url}
											target='blank'
											className='framework-link language-link'
										>
											<img
												className='framework-logo'
												id={framework.name}
												src={framework.img}
												alt={framework.name}
											/>
										</a>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
			<CTAButton text='Find a channel' anchor='/' color='#ff3434' />
		</div>
	);
};

export default BackEnd;
