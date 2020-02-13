import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';
import { userAuthenticate } from '../actions/userAuthenticate';
import { fetchVehicles } from '../actions/fetchVehicles';

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

		this.props
			.userAuthenticate(this.state)
			.then(() => {
				if (localStorage.getItem('token')) {
					this.props.fetchVehicles();
				}
			})
			.then(() => this.props.history.push('/garage'));

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
		this.props.history.push('/login');
		if (localStorage.getItem('token')) {
			this.props.history.push('/garage');
		}
	};

	render() {
		return (
			<div className='login-container'>
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
	userAuthenticate: userInfo => dispatch(userAuthenticate(userInfo)),
	fetchVehicles: () => dispatch(fetchVehicles())
});

const mapStateToProps = state => {
	return {
		loggedIn: state.userReducer.loggedIn
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
