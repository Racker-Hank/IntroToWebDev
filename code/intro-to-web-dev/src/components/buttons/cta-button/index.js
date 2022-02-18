import React from 'react';

const CTAButton = (props) => {
	const { text, anchor } = props;
	return (
		<a
			href={`#${anchor}`}
			className='cta-btn'
			onClick={() => {
				return false;
			}}
		>
			{text}
		</a>
	);
};

export default CTAButton;
