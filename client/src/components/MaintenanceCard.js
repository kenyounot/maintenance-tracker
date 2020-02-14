import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const MaintenanceCard = props => {
	return (
		<Card bg='light' border='primary' style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{props.maintenance.kind}</Card.Title>

				<ListGroup className='list-group-flush'>
					<ListGroupItem variant='info'>
						Mileage: {props.maintenance.mileage}
					</ListGroupItem>
					<ListGroupItem variant='info'>Parts: {props.maintenance.parts}</ListGroupItem>
					<ListGroupItem variant='info'>
						Description: {props.maintenance.description}
					</ListGroupItem>
					<ListGroupItem variant='info'>Price: {props.maintenance.price}</ListGroupItem>
				</ListGroup>
				<Button
					maintenance-id={props.maintenance.id}
					variant='danger'
					onClick={props.handleDelete}
				>
					Delete Maintenance
				</Button>
			</Card.Body>
		</Card>
	);
};

export default MaintenanceCard;
