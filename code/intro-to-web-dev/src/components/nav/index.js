import React, { useState, useEffect } from 'react';

import CTAButton from '../buttons/cta-button';

const Nav = (props) => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isShowNav, setIsShowNav] = useState(false);

	const { heroInView, techInView, channelInView } = props;

	const checkScroll = () => {
		setIsShowNav(true);
	};

	const checkWidth = () => {
		if (window.innerWidth < 768) {
			if (!isShowMenu) {
				setIsShowMenu(false);
			}
		} else {
			setIsShowMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('resize', checkScroll);
		};
	}, []);

	useEffect(() => {
		window.addEventListener('resize', checkWidth);

		return () => {
			window.removeEventListener('resize', checkWidth);
		};
	});

	return (
		<section
			className={`header-container ${
				isShowNav ? 'showNav' : 'showNavAnimation'
			}`}
			id='nav'
		>
			<div className='nav-container'>
				<nav>
					<a href='https://mindx.edu.vn/' target='blank'>
						{/* <div className='logo'>
							<p id='mind'>
								Mind
								<span id='x'>X</span>
							</p>
						</div> */}
						<img
							src='https://raw.githubusercontent.com/Racker-Hank/IntroToWebDev/master/code/intro-to-web-dev/res/nav/mindX%20logo.png'
							alt='mindX-logo'
							id='mindX-logo'
						/>
					</a>
					<button
						className='btn'
						onClick={() => setIsShowMenu(!isShowMenu)}
					>
						<i className='fas fa-solid fa-bars'></i>
					</button>
				</nav>
				<div
					className={`menu-items-container ${
						window.innerWidth < 768
							? isShowMenu
								? 'showMenu'
								: 'hideMenu'
							: ''
					}`}
				>
					<ul className='menu-items'>
						<li className='menu-item'>
							<a
								className={`menu-item-link ${
									heroInView ? 'active' : ''
								}`}
								href='#top'
								onClick={() => setIsShowMenu(false)}
							>
								Home
							</a>
						</li>
						<li className='menu-item'>
							<a
								className={`menu-item-link ${
									techInView ? 'active' : ''
								}`}
								href='#tech'
								onClick={() => setIsShowMenu(false)}
							>
								Tech
							</a>
						</li>
						<li className='menu-item'>
							<a
								className={`menu-item-link ${
									channelInView ? 'active' : ''
								}`}
								href='#channel'
								onClick={() => setIsShowMenu(false)}
							>
								Channel
							</a>
						</li>
					</ul>
				</div>
				<CTAButton
					text='Learn More'
					anchor='https://mindx.edu.vn/course/khoa-hoc-lap-trinh-web-cho-hoc-sinh'
					target='blank'
					color='#ff3434'
				/>
			</div>
		</section>
	);
};

export default Nav;
