import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Garage from './containers/Garage';
import { userFetchProfile } from './actions/userFetchProfile';
import { fetchVehicles } from './actions/fetchVehicles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {
		this.props.fetchProfile().then(() => {
			if (localStorage.getItem('token')) {
				this.props.fetchVehicles();
			}
		});
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
					<ProtectedRoute exact path='/garage' component={Garage} />
				</Switch>
			</div>
		);
	}
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem('token') ? (
				<>
					<NavBar />
					<Component {...props} />
				</>
			) : (
				<Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const mapDispatchToProps = dispatch => {
	return {
		fetchProfile: () => dispatch(userFetchProfile()),
		fetchVehicles: () => dispatch(fetchVehicles())
	};
};

export default connect(null, mapDispatchToProps)(App);
