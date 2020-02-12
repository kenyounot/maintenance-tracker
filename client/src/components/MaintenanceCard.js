import React from 'react';

const MaintenanceCard = props => {
	return (
		<div className='maintenance-card'>
			<ul>
				<p>Type: {props.maintenance.kind}</p>
				<p>Mileage: {props.maintenance.mileage}</p>
				<p>Parts: {props.maintenance.parts}</p>
				<p>Description: {props.maintenance.description}</p>
				<p>Price: {props.maintenance.price}</p>
			</ul>
		</div>
	);
};

export default MaintenanceCard;
