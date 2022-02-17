import React from 'react';

const data = [
	{
		id: 1,
		name: 'HTML',
		description: 'The backbone of the website, decide what the user will see',
		img: '../../../../res/tech/basic-language/html.png',
		dropShadowColor: '#C52E06',
	},
	{
		id: 2,
		name: 'CSS',
		description:
			'The clothes of the website, decide how one should look with your endless creativity',
		img: '../../../../res/tech/basic-language/css.png',
		dropShadowColor: '#048FCB',
	},
	{
		id: 3,
		name: 'JavaScript',
		description: 'The brain of the website, endless support and frameworks',
		img: '../../../../res/tech/basic-language/js.png',
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
		</section>
	);
};

const Language = (props) => {
	const { name, description, img, dropShadowColor } = props;
	return (
		<article
			className='language-container'
			style={{
				padding: '1rem',
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
