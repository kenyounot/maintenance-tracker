import SignUpForm from '../components/SignUpForm';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { userPostFetch } from '../actions/userFetch';

export class SignUp extends Component {
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

		this.props.userPostFetch(this.state).then(() => this.props.history.push('/garage'));
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

	handleLoginClick = () => {
		this.props.history.push('/login');
	};

	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.props.history.push('/garage');
		}
	};

	render() {
		return (
			<div className='form-container'>
				<SignUpForm
					handleLoginClick={this.handleLoginClick}
					handleOnSubmit={this.handleOnSubmit}
					handleOnChange={this.handleOnChange}
					userInfo={this.state}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(SignUp);
