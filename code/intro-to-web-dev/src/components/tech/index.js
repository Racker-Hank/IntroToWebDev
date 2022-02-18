import React from 'react';

import SectionBreakText from '../section-break-text';
import BasicLanguages from './basic-languages';
import BasicTools from './basic-tools';

const Tech = () => {
	return (
		<section id='tech'>
			<SectionBreakText
				title='languages to learn'
				subtitles={['Take your first', 'with']}
				redText='steps'
			/>
			<BasicLanguages />
			<BasicTools />
		</section>
	);
};

export default Tech;
