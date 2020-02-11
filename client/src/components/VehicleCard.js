import React from 'react';
import Button from 'react-bootstrap/Button';

const VehicleCard = props => {
	return (
		<div className='vehicle-card'>
			<div onClick={props.handleCardClick} vehicle-id={props.vehicle.id}>
				<ul>
					<p>{props.vehicle.year}</p>
					<p>{props.vehicle.make}</p>
					<p>{props.vehicle.model}</p>
					<p>{props.vehicle.mileage}</p>
				</ul>
			</div>
			<Button vehicle-id={props.vehicle.id} variant='danger' onClick={props.handleDelete}>
				Delete
			</Button>
		</div>
	);
};

export default VehicleCard;
