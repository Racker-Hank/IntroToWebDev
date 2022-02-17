import React, { useState } from 'react';

const Nav = () => {
	const [isShowMenu, setIsShowMenu] = useState(false);
	return (
		<div className='nav-container'>
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
						<a className='menu-item-link active' href='/'>
							Home
						</a>
					</li>
					<li className='menu-item'>
						<a className='menu-item-link' href='/'>
							Tech
						</a>
					</li>
					<li className='menu-item'>
						<a className='menu-item-link' href='/'>
							Channels
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
