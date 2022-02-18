import React from 'react';

import CTAButton from '../../buttons/cta-button';

const data = [
	{
		id: 1,
		name: 'HTML',
		description: 'The backbone of the website, decide what the user will see',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-language/html.png',
		dropShadowColor: '#C52E06',
	},
	{
		id: 2,
		name: 'CSS',
		description:
			'The clothes of the website, decide how one should look with your endless creativity',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-language/css.png',
		dropShadowColor: '#048FCB',
	},
	{
		id: 3,
		name: 'JavaScript',
		description: 'The brain of the website, endless support and frameworks',
		img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/basic-language/js.png',
		dropShadowColor: '#E1C107',
	},
];

const BasicLanguages = () => {
	return (
		<section className='basic-languages'>
			<div className='languages-container'>
				{data.map((language) => {
					return <Language key={language.id} {...language} />;
				})}
			</div>
			<CTAButton text='Find a channel' anchor='top' />
			{/* {
				(window.onscroll = () => {
					console.log(window.innerHeight);
					console.log(window.scrollY);
					console.log(window.scrollY - window.innerHeight / 2);
				})
			} */}
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

export default BasicLanguages;
