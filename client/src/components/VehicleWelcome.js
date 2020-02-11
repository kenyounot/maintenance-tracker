import React from 'react';

const VehicleWelcome = props => {
	return (
		<div>
			<h3>
				Here's Your {props.make} {props.model}'s maintenance history.
			</h3>
		</div>
	);
};

export default VehicleWelcome;
