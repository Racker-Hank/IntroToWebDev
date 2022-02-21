import React from 'react';

const data = [
	{
		id: 0,
		name: 'stack-overflow',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/tools/stackoverflow.svg',
		url: 'https://stackoverflow.com/',
	},
	{
		id: 1,
		name: 'npm',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/tools/npm.svg',
		url: 'https://www.npmjs.com/',
	},
	{
		id: 2,
		name: 'yarn',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/tools/yarn.svg',
		url: 'https://yarnpkg.com/',
	},
];

const BackEndTools = () => {
	return (
		<div
			className='back-end-tools section-without-background'
			id='back-end-tools'
		>
			<h2 className='section-name section-without-background-name'>
				Back End Tools
			</h2>
			<div className='tools-container'>
				{data.map((tool) => {
					return (
						<a
							key={tool.id}
							href={tool.url}
							target='blank'
							className='language-link'
						>
							<img
								src={tool.img}
								alt={tool.name}
								className='logo'
								id={tool.name}
							/>
						</a>
					);
				})}
			</div>
			<p className='many-more'>and that's all, really :)</p>
		</div>
	);
};

export default BackEndTools;
