import React from 'react';
import Login from './containers/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
