import React from 'react';

const VehicleWelcome = props => {
	return (
		<div>
			Here's Your {props.model} {props.make}'s maintenance history.
		</div>
	);
};

export default VehicleWelcome;
