import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userAuthenticate } from '../actions/userAuthenticate';

export class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	handleOnChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleOnSubmit = event => {
		event.preventDefault();

		this.props.userAuthenticate(this.state);
		this.props.history.push('/home');
		this.setState({
			email: '',
			password: ''
		});
	};

	render() {
		return (
			<div>
				<h2>Login Below</h2>
				<form className='input-form' onSubmit={this.handleOnSubmit}>
					<input
						onChange={this.handleOnChange}
						type='email'
						name='email'
						placeholder='Enter email...'
						value={this.state.email}
					/>
					<br />
					<input
						onChange={this.handleOnChange}
						type='password'
						name='password'
						placeholder='Enter password...'
						value={this.state.password}
					/>
					<br />
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	userAuthenticate: userInfo => dispatch(userAuthenticate(userInfo))
});

export default connect(null, mapDispatchToProps)(LoginForm);
