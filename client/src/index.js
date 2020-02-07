import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Provider store={configureStore}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
