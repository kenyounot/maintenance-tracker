import React from 'react';
import Button from 'react-bootstrap/Button';
import download from '../images/download.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const VehicleCard = props => {
	return (
		<Card vehicle-id={props.vehicle.id} style={{ width: '18rem' }}>
			<Card.Img variant='top' src={download} onClick={props.handleCardClick} />
			<Card.Body>
				<Card.Title>{props.vehicle.make}</Card.Title>

				<ListGroup className='list-group-flush'>
					<ListGroupItem>Year: {props.vehicle.year}</ListGroupItem>
					<ListGroupItem>Model: {props.vehicle.model}</ListGroupItem>
					<ListGroupItem>Mileage: {props.vehicle.mileage}</ListGroupItem>
				</ListGroup>
				<Button
					vehicle-id={props.vehicle.id}
					variant='danger'
					onClick={props.handleDelete}
				>
					Delete Vehicle
				</Button>
			</Card.Body>
		</Card>
	);
};

export default VehicleCard;
