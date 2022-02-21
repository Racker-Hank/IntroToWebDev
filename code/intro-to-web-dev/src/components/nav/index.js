import React, { useState, useEffect } from 'react';

const Nav = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isShowNav, setIsShowNav] = useState(false);

	const checkScroll = () => {
		setIsShowNav(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', checkScroll);

		return () => {
			window.removeEventListener('resize', checkScroll);
		};
	}, []);

	return (
		<div
			className={`nav-container ${
				isShowNav ? 'showNav' : 'showNavAnimation'
			}`}
			id='nav'
		>
			<nav>
				<a href='https://mindx.edu.vn/' target='blank'>
					<div className='logo'>
						<p id='mind'>
							Mind
							<span id='x'>X</span>
						</p>
					</div>
				</a>
				<button className='btn' onClick={() => setIsShowMenu(!isShowMenu)}>
					<i className='fas fa-solid fa-bars'></i>
				</button>
			</nav>
			<div
				className={`menu-items-container ${
					isShowMenu ? 'showMenu' : 'hideMenu'
				}`}
			>
				<ul className='menu-items'>
					<li className='menu-item'>
						<a
							className='menu-item-link active'
							href='#top'
							onClick={() => setIsShowMenu(false)}
						>
							Home
						</a>
					</li>
					<li className='menu-item'>
						<a
							className='menu-item-link'
							href='#tech'
							onClick={() => setIsShowMenu(false)}
						>
							Tech
						</a>
					</li>
					<li className='menu-item'>
						<a
							className='menu-item-link'
							href='/'
							onClick={() => setIsShowMenu(false)}
						>
							Channels
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
