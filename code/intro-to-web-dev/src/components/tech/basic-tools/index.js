import React, { useState } from 'react';

const data = [
	{
		id: 1,
		name: 'GitHub',
		description:
			'A code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.',
		urls: [
			'https://www.youtube.com/results?search_query=github+tutorial',
			'https://github.com/',
		],
	},
	{
		id: 2,
		name: 'VS Code',
		description:
			'A source-code editor made by Microsoft for Windows, Linux and macOS.One of the most common and beloved tool of Front End developers, personal favourite code editor, highly recommended',
		urls: [
			'https://www.youtube.com/results?search_query=visual+studio+code+tutorial',
			'https://code.visualstudio.com/',
		],
	},
	{
		id: 3,
		name: 'Git',
		description:
			'A software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
		urls: [
			'https://www.youtube.com/results?search_query=git+tutorial',
			'https://git-scm.com/',
		],
	},
];

const BasicTools = () => {
	const [index, setIndex] = useState(1);

	return <section className='basic-tools'></section>;
};

export default BasicTools;
