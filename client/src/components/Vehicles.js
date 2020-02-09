import React, { Component } from 'react';
import Vehicle from './Vehicle';

export class Vehicles extends Component {
	constructor(props) {
		super(props);
	}

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
