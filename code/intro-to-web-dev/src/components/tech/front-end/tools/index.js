import React from 'react';

const data = [
	{
		id: 0,
		name: 'ui-goodies',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/8ff5f25dbccda09da165f6d910157675f3f9a299/code/intro-to-web-dev/res/tech/front-end/tools/ui-goodies.svg',
		url: 'https://uigoodies.com/',
	},
	{
		id: 1,
		name: 'resources-for-designer',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/resources-for-designer.svg',
		url: 'https://resourcesfordesigner.com/',
	},
	{
		id: 2,
		name: 'adobe-xd',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/adobe-xd.svg',
		url: 'https://www.adobe.com/sea/products/xd.html',
	},
	{
		id: 3,
		name: 'figma',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/figma.svg',
		url: 'https://www.figma.com/',
	},
	{
		id: 4,
		name: 'can-i-use',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/caniuse.png',
		url: 'https://caniuse.com/',
	},
	{
		id: 5,
		name: 'google-fonts',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/google-fonts.svg',
		url: 'https://fonts.google.com/',
	},
	{
		id: 6,
		name: 'code-pen',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/codepen.svg',
		url: 'https://codepen.io/',
	},
	{
		id: 7,
		name: 'pexels',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/pexels.svg',
		url: 'https://www.pexels.com/',
	},
	{
		id: 8,
		name: 'unsplash',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/unsplash.svg',
		url: 'https://unsplash.com/',
	},
	{
		id: 9,
		name: 'rive',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/rive.png',
		url: 'https://rive.app/',
	},
	{
		id: 10,
		name: 'font-awesome',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/font-awesome.svg',
		url: 'https://fontawesome.com/',
	},
	{
		id: 11,
		name: 'remix-icon',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/front-end/tools/remix-icon.svg',
		url: 'https://remixicon.com/',
	},
];

const FrontEndTools = () => {
	return (
		<div
			className='front-end-tools section-without-background'
			id='front-end-tools'
		>
			<h2 className='section-name section-without-background-name'>
				Front End Tools
			</h2>
			{data.map((tool) => {
				return <img src={tool.img} alt='' />;
			})}
			<p className='many-more'>and many many more..</p>
		</div>
	);
};

export default FrontEndTools;
