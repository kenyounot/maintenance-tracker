import React from 'react';
import userLogout from '../actions/userLogout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/login'>Home</Link>
				</li>
				<li>
					<Link to='/login' onClick={props.userLogout}>
						Logout
					</Link>
				</li>
			</ul>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		userLogout: () => dispatch(userLogout())
	};
};

export default connect(null, mapDispatchToProps)(NavBar);
