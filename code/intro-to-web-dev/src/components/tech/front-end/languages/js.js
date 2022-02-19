import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'react',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/react/react.svg',
		description:
			'Most famous framework, maintained by Facebook, huge community support',
		url: 'https://reactjs.org/',
		frameworks: [
			{
				id: 0,
				name: 'next-js',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/react/nextjs.svg',
				url: 'https://nextjs.org/',
			},
			{
				id: 1,
				name: 'gatsby',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/react/gatsby.svg',
				url: 'https://www.gatsbyjs.com/',
			},
			{
				id: 2,
				name: 'remix',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/react/remix.png',
				url: 'https://remix.run/',
			},
		],
	},
	{
		id: 1,
		name: 'vue',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/vue/vue.png',
		description:
			'Created by Evan You, maintained by him and his team, has growing community',
		url: 'https://vuejs.org/',
		frameworks: [
			{
				id: 0,
				name: 'nuxt-js',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/vue/nuxtjs.svg',
				url: 'https://nuxtjs.org/',
			},
		],
	},
	{
		id: 2,
		name: 'svelte',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/svelte/svelte.png',
		description:
			'Created by Rich Harris, maintained by Svelte (now part of Vercel), beginner friendly, recently released Svelte3 which receive big support from the community',
		url: 'https://svelte.dev/',
		frameworks: [
			{
				id: 0,
				name: 'svelte-kit',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/languages/js/svelte/svelte-kit.png',
				url: 'https://kit.svelte.dev/',
			},
		],
	},
];

const JS = () => {
	return (
		<div className='js-container front-end-language-container'>
			<div className='text-container'>
				<h3 className='title'>level up your JS game</h3>
				<p className='subtitle'>
					<span className='red-text'>Fun things</span> you can check out
					after learning{' '}
					<code className='language-name' id='js'>
						JS
					</code>
				</p>
			</div>
			<div className='languages-container'>
				{data.map((language) => {
					return (
						<div className='language-container' key={language.id}>
							<a href={language.url} className='language-name-container'>
								<img
									src={language.img}
									alt={language.name}
									className='language-logo'
									id={language.name + '-logo'}
								/>
								<p
									className='language-name'
									id={language.name + '-name'}
								>
									{language.name}
								</p>
							</a>
							<p className='description'>{language.description}</p>
							<div className='frameworks-container'>
								{language.frameworks.map((framework) => {
									return (
										<a
											key={framework.id}
											href={framework.url}
											target='blank'
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

export default JS;
