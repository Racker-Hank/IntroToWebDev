import React from 'react';

const SectionBreakText = (props) => {
	const { title, subtitles, redText } = props;

	return (
		<div className='section-break-text' id='tech'>
			<h1 className='title'>{title}</h1>
			<h2 className='subtitle'>
				{subtitles[0] + ' '}
				<span className='red-text' id='steps'>
					{redText}
				</span>{' '}
				{subtitles[1]}
			</h2>
		</div>
	);
};

export default SectionBreakText;