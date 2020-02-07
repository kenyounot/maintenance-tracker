import React from 'react';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import { Switch, Route, Link } from 'react-router-dom';

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
			</Switch>
		</div>
	);
}

export default App;
