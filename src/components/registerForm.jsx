import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form.jsx';

class RegisterForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};

	schema = {
		username: Joi.string().min(3).max(30).required().label('Username'),
		password: Joi.string()
			.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
			.label('Password'),
		name: Joi.string().min(3).max(30).required().label('Name')
	};

	doSubmit = () => {
		console.log('submitted.');
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderInput('name', 'Name')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
