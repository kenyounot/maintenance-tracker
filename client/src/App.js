import React from 'react';
import { connect } from 'react-redux';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
	return (
		<div>
			<ul>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<Link to='/signup'>Signup</Link>
				</li>
			</ul>

			<Switch>
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<ProtectedRoute exact path='/home' component={Home} />
			</Switch>
		</div>
	);
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem('token') ? (
				<Component {...props} />
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

export default App;
