import React from 'react';
import userLogout from '../actions/userLogout';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = props => {
	return (
		<div>
			<Navbar bg='primary' variant='dark'>
				<Nav className='mr-auto'>
					<LinkContainer to='/garage'>
						<Nav.Link>Garage</Nav.Link>
					</LinkContainer>
					<LinkContainer to='/' onClick={props.userLogout}>
						<Nav.Link>Logout</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		userLogout: () => dispatch(userLogout())
	};
};

export default connect(null, mapDispatchToProps)(Navigation);
