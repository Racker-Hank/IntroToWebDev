import React from 'react';

import SectionBreakText from '../section-break-text';
import Roadmap from './roadmap';
import CrashCourses from './crash-course';
import FrontEnd from './front-end';
import WebDev from './web-dev';

const Channel = () => {
	return (
		<section id='channel' style={{ paddingTop: '5rem' }}>
			<SectionBreakText
				section='channel-start'
				title='channels to help you out'
				subtitles={['Amazing', 'sharing their knowledge']}
				redText='creators'
			/>
			<Roadmap />
			<CrashCourses />
			<FrontEnd />
			<WebDev />
		</section>
	);
};

export default React.memo(Channel);
