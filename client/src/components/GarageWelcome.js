import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const GarageWelcome = props => {
	return (
		<Jumbotron fluid>
			<Container>
				<h1>{props.userName}'s Garage</h1>
			</Container>
		</Jumbotron>
	);
};

export default GarageWelcome;
