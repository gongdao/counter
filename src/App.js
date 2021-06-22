import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies.jsx';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Customers from './components/customers';
import Rentals from './components/rentals.jsx';
import NotFound from './components/notFound.jsx';
import NavBar from './components/navbar.jsx';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<main className='container'>
					<Switch>
						<Route path='/login' component={LoginForm} />
						<Route path='/register' component={RegisterForm} />
						<Route path='/movies' component={Movies} />
						<Route path='/customers' component={Customers} />
						<Route path='/rentals' component={Rentals} />
						<Route path='/not-found' component={NotFound} />
						<Redirect from='/' exact to='/movies' />
						<Redirect to='not-found' />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
