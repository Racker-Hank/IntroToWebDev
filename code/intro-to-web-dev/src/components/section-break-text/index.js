import React from 'react';

const SectionBreakText = (props) => {
	const { section, title, subtitles, redText } = props;

	return (
		<div className='section-break-text' id={section}>
			{title && <h1 className='title'>{title}</h1>}
			<h2 className='subtitle'>
				{subtitles[0] + ' '}
				{redText && (
					<span className='red-text' id={redText}>
						{redText + ' '}
					</span>
				)}
				{subtitles[1]}
			</h2>
		</div>
	);
};

export default SectionBreakText;
