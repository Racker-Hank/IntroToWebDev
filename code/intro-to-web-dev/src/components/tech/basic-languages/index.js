import React from 'react';

import CTAButton from '../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'HTML',
		description:
			'The backbone of the website, decide what the users will see',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-languages/html.png',
		dropShadowColor: '#C52E06',
	},
	{
		id: 1,
		name: 'CSS',
		description:
			'The clothes of the website, decide how one should look with your endless creativity',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-languages/css.png',
		dropShadowColor: '#048FCB',
	},
	{
		id: 2,
		name: 'JavaScript',
		description: 'The brain of the website, endless support and frameworks',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-languages/js.png',
		dropShadowColor: '#E1C107',
	},
];

const BasicLanguages = () => {
	return (
		<section className='basic-languages' id='basic-languages'>
			<div className='languages-container'>
				{data.map((language) => {
					return <Language key={language.id} {...language} />;
				})}
			</div>
			<CTAButton text='Find a channel' anchor='#roadmap' color='#ff3434' />
		</section>
	);
};

const Language = (props) => {
	const { name, description, img, dropShadowColor } = props;
	return (
		<article
			id={name}
			className='language-container'
			style={{
				boxShadow: '0 5px 20px 2px ' + dropShadowColor,
			}}
		>
			<img src={img} alt={name} className='language-img' />
			<h3 className='language-name'>{name}</h3>
			<p className='language-description'>{description}</p>
		</article>
	);
};

export default React.memo(BasicLanguages);
