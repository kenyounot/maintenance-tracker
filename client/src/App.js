import React from 'react';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/login'>
						<Login />
					</Route>

					<Route exact path='/signup'>
						<SignUp />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
