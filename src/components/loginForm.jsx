import React from 'react';
import Joi from 'joi-browser';

import Form from './common/form.jsx';

class LoginForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().min(3).max(30).required().label('Username'),
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.label('Password')
	};

	doSubmit = () => {
		console.log('submitted.');
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
