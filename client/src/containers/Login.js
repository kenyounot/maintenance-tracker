import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import { userAuthenticate } from '../actions/userAuthenticate';

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();

		this.props.userAuthenticate(this.state).then(() => this.props.history.push('/home'));

		this.setState({
			email: '',
			password: ''
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
				<LoginForm
					handleOnChange={this.handleOnChange}
					handleOnSubmit={this.handleOnSubmit}
					userInfo={this.state}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	userAuthenticate: userInfo => dispatch(userAuthenticate(userInfo))
});

export default connect(null, mapDispatchToProps)(Login);
