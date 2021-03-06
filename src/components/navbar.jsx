/** @format */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Stateless Functional Component

const NavBar = (props) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					Navbar
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink className='nav-item nav-link' to='/movies'>
							Movies
						</NavLink>
						<Link className='nav-item nav-link' to='/customers'>
							Customers
						</Link>
						<NavLink className='nav-item nav-link' to='/rentals'>
							Rentals
						</NavLink>
						<NavLink className='nav-item nav-link' to='/login'>
							Login
						</NavLink>
						<NavLink className='nav-item nav-link' to='/register'>
							Register
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
