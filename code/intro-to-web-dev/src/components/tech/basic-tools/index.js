import React, { useState } from 'react';

import CTAButton from '../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'GitHub',
		logo: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-tools/github.svg',
		description:
			'A code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.',
		urls: [
			'https://www.youtube.com/results?search_query=github+tutorial',
			'https://github.com/',
		],
	},
	{
		id: 1,
		name: 'VS Code',
		logo: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-tools/vscode.svg',
		description:
			'A source-code editor made by Microsoft for Windows, Linux and macOS. One of the most common and beloved tool of Front End developers, personal favourite code editor, highly recommended',
		urls: [
			'https://www.youtube.com/results?search_query=visual+studio+code+tutorial',
			'https://code.visualstudio.com/',
		],
	},
	{
		id: 2,
		name: 'Git',
		logo: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-tools/git.svg',
		description:
			'A software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
		urls: [
			'https://www.youtube.com/results?search_query=git+tutorial',
			'https://git-scm.com/',
		],
	},
];

const BasicTools = () => {
	const [index, setIndex] = useState(1);

	return (
		<section
			className='basic-tools section-without-background'
			id='basic-tools'
		>
			<div className='tools-container'>
				<h2 className='section-name section-without-background-name'>
					Basic Tools
				</h2>
				<div className='logos-container'>
					{data.map((tool) => {
						return (
							<img
								key={tool.id}
								className={`logo ${
									tool.id > index
										? 'right'
										: tool.id < index
										? 'left'
										: 'current'
								}`}
								src={tool.logo}
								alt={tool.name}
								onClick={() => {
									setIndex(tool.id);
								}}
							/>
						);
					})}
				</div>
				<div className='tools-info-container'>
					{data.map((tool) => {
						return (
							<article
								className={`tool-info ${
									tool.id > index
										? 'right'
										: tool.id < index
										? 'left'
										: 'current'
								}`}
								key={tool.id}
							>
								<h3 className='name'>{tool.name}</h3>
								<p className='description'>{tool.description}</p>
							</article>
						);
					})}
				</div>
				<div className='cta-btn-container'>
					<CTAButton
						text='Find a tutorial'
						anchor={data[index].urls[0]}
						target='_blank'
						color='#ff3434'
					/>
					<CTAButton
						text={'Explore ' + data[index].name}
						anchor={data[index].urls[1]}
						target='_blank'
						color='#5378FF'
					/>
				</div>
				<p className='many-more'>and many many more..</p>
			</div>
		</section>
	);
};

export default BasicTools;
