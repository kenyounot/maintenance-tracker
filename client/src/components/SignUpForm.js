import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userFetch';

export class SignUpForm extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();

		this.props.userPostFetch(this.state);
		this.setState({
			name: '',
			email: '',
			password: '',
			password_confirmation: ''
		});
	};

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div>
				<h2>Sign Up Below</h2>
				<form onSubmit={this.handleOnSubmit} className='signup-form'>
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
						name='password_confirmation'
						placeholder='Password Confirm'
						value={this.state.password_confirmation}
					/>
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUpForm);
