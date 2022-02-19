import React from 'react';

import SectionBreakText from '../section-break-text';
import BasicLanguages from './basic-languages';
import BasicTools from './basic-tools';
import FrontEndLanguages from './front-end/languages';

const Tech = () => {
	return (
		<section id='tech' style={{ paddingTop: '5rem' }}>
			<SectionBreakText
				section='tech-start'
				title='languages to learn'
				subtitles={['Take your first', 'with']}
				redText='steps'
			/>
			<BasicLanguages />
			<BasicTools />
			<SectionBreakText
				section='tech-break'
				subtitles={['and then you', '']}
				redText='choose'
			/>
			<section className='front-end' id='front-end'>
				<FrontEndLanguages />
			</section>
		</section>
	);
};

export default Tech;
