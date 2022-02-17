import React from 'react';

import SectionBreakText from '../section-break-text';
import BasicLanguages from './basic-language';

const Tech = () => {
	return (
		<main>
			<SectionBreakText
				title='languages to learn'
				subtitles={['Take your first', 'with']}
				redText='steps'
			/>
			<BasicLanguages />
		</main>
	);
};

export default Tech;
