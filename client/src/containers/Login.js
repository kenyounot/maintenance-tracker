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

	handleCreateClick = () => {
		this.props.history.push('/signup');
	};

	componentDidMount = () => {
		if (localStorage.getItem('token')) {
			this.props.history.push('/home');
		}
		this.props.history.push('/login');
	};

	render() {
		return (
			<div>
				<LoginForm
					handleCreateClick={this.handleCreateClick}
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

const mapStateToProps = state => {
	return {
		loggedIn: state.userReducer.loggedIn
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
