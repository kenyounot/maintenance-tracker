import React, { Component } from 'react';

export class SignUpForm extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		};
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		console.log(this.state);

		return (
			<div>
				<h2>Sign Up Below</h2>
				<form className='signup-form'>
					<input
						onChange={this.handleOnChange}
						type='text'
						name='name'
						placeholder='Name'
						value={this.state.name}
					/>
					<br />
					<input
						onChange={this.handleOnChange}
						type='email'
						name='email'
						placholder='Email'
						value={this.state.email}
					/>
					<br />
					<input
						onChange={this.handleOnChange}
						type='password'
						name='password'
						placeholder='Password'
						value={this.state.password}
					/>
					<br />
					<input
						onChange={this.handleOnChange}
						type='password'
						name='passwordConfirmation'
						placeholder='Password Confirm'
						value={this.state.passwordConfirmation}
					/>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
