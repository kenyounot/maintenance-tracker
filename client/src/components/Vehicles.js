import React, { Component } from 'react';
import Vehicle from './Vehicle';

export class Vehicles extends Component {
	renderVehicles = vehicles => {
		return vehicles.map((vehicle, idx) => {
			return <Vehicle key={idx} vehicle={vehicle} />;
		});
	};

	render() {
		return <div>{this.renderVehicles(this.props.vehicles)}</div>;
	}
}

export default Vehicles;
