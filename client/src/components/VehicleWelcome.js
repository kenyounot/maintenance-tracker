import React from 'react';

const VehicleWelcome = props => {
	return (
		<div>
			Here's Your {props.make} {props.model}'s maintenance history.
		</div>
	);
};

export default VehicleWelcome;
