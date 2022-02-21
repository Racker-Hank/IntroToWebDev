import React from 'react';

import CTAButton from '../../../buttons/cta-button';

const data = [
	{
		id: 0,
		name: 'no-sql',
		tools: [
			{
				id: 0,
				name: 'mongodb',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/mongodb.svg',
				url: 'https://www.mongodb.com/',
			},
			{
				id: 1,
				name: 'firebase',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/firebase.svg',
				url: 'https://firebase.google.com/',
			},
			{
				id: 2,
				name: 'redis',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/redis.svg',
				url: 'https://redis.io/',
			},
			{
				id: 3,
				name: 'graphql',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/graphql.png',
				url: 'https://graphql.org/',
			},
			{
				id: 4,
				name: 'fauna',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/faunadb.svg',
				url: 'https://fauna.com/',
			},
			{
				id: 5,
				name: 'dynamo',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/nosql/dynamodb.svg',
				url: 'https://aws.amazon.com/dynamodb/',
			},
		],
	},
	{
		id: 1,
		name: 'sql',
		tools: [
			{
				id: 0,
				name: 'postgresql',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/sql/postgresql.svg',
				url: 'https://www.postgresql.org/',
			},
			{
				id: 1,
				name: 'mysql',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/sql/mysql.svg',
				url: 'https://www.mysql.com/',
			},
			{
				id: 2,
				name: 'sqlite',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/sql/sqlite.svg',
				url: 'https://www.sqlite.org/index.html',
			},
			{
				id: 3,
				name: 'mariadb',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/sql/mariadb.svg',
				url: 'https://mariadb.org/',
			},
			{
				id: 4,
				name: 'sql-server',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/sql/sql-server.svg',
				url: 'https://www.microsoft.com/en-us/sql-server',
			},
		],
	},
	{
		id: 2,
		name: 'cloud-service',
		tools: [
			{
				id: 0,
				name: 'aws',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/cloud-service/aws.svg',
				url: 'https://aws.amazon.com/',
			},
			{
				id: 1,
				name: 'google-cloud-platform',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/cloud-service/gcp.svg',
				url: 'https://cloud.google.com/',
			},
			{
				id: 2,
				name: 'azure',
				img: 'https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/tech/back-end/languages/database/cloud-service/azure.svg',
				url: 'https://azure.microsoft.com/en-us/',
			},
		],
	},
];

const Databse = () => {
	return (
		<div className='database-container back-end-languages-container'>
			<div className='text-container'>
				<h3 className='title'>Database Tools</h3>
				<p className='subtitle'>
					<span className='red-text'>Apps</span> and
					<span className='blue-text'>platforms</span> to organize your
					data
				</p>
			</div>
			<div className='languages-container'>
				{data.map((tools) => {
					return (
						<div className='tools-container' key={tools.id}>
							{tools.tools.map((tool) => {
								return (
									<a
										href={tool.url}
										target='blank'
										className='language-link'
										key={tool.id}
									>
										<img
											src={tool.img}
											alt={tool.name}
											className='tool-logo'
											id={tool.name}
										/>
									</a>
								);
							})}
						</div>
					);
				})}
			</div>
			<CTAButton text='Find a channel' anchor='/' color='#ff3434' />
		</div>
	);
};

export default Databse;
