import React from 'react';

const Vehicle = props => {
	return (
		<div className='vehicle-card'>
			<ul>
				<p>{props.vehicle.year}</p>
				<p>{props.vehicle.make}</p>
				<p>{props.vehicle.model}</p>
				<p>{props.vehicle.mileage}</p>
			</ul>
		</div>
	);
};

export default Vehicle;
