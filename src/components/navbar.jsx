import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<ul className='navbar-nav'>
			<li className='nav-item'>
				<Link className='nav-link' to='/'>
					Home
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/products'>
					Products
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/posts/2018/06'>
					Posts
				</Link>
			</li>
			<li className='nav-item'>
				<Link className='nav-link' to='/admin'>
					Admin
				</Link>
			</li>
		</ul>
	);
};

export default NavBar;
