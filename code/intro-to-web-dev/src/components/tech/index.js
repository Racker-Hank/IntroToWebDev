import React from 'react';

import SectionBreakText from '../section-break-text';
import BasicLanguage from './basic-language';

const Tech = () => {
	return (
		<main>
			<SectionBreakText
				title='languages to learn'
				subtitles={['Take your first', 'with']}
				redText='steps'
			/>
			<BasicLanguage />
		</main>
	);
};

export default Tech;
