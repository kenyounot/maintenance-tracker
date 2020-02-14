import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const VehicleWelcome = props => {
	return (
		<Jumbotron fluid>
			<Container>
				<h1>
					{props.make} {props.model}'s Maintenance Page
				</h1>
			</Container>
		</Jumbotron>
	);
};

export default VehicleWelcome;
