import React from 'react';

const CTAButton = (props) => {
	const { text, anchor, target, color } = props;
	return (
		<a
			href={anchor}
			target={target}
			className='cta-btn'
			onClick={() => {
				return false;
			}}
			style={{
				backgroundColor: color,
				boxShadow: '0px 0px 3.125em 0.3em' + color,
			}}
		>
			{text}
		</a>
	);
};

export default CTAButton;
