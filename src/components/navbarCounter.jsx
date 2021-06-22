/** @format */

import React from 'react';

// Stateless Functional Component

const NavBar = (props) => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container-fluid'>
				<p className='navbar-brand'>
					Navbar{' '}
					<span className='badge badge-pill badge-secondary'>
						{props.totalCounters}
					</span>
				</p>
			</div>
		</nav>
	);
};

export default NavBar;
