import React from 'react';

import Roadmap from './roadmap';
import CrashCourses from './crash-course';
import FrontEnd from './front-end';
import WebDev from './web-dev';

const Channel = () => {
	return (
		<section id='channel' style={{ paddingTop: '5rem' }}>
			<Roadmap />
			<CrashCourses />
			<FrontEnd />
			<WebDev />
		</section>
	);
};

export default Channel;
