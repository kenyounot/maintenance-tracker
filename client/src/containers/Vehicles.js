import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteVehicle } from '../actions/deleteVehicle';
import Vehicle from '../components/Vehicle';

export class Vehicles extends Component {
	handleDelete = event => {
		const vehId = event.target.getAttribute('vehicle-id');

		this.props.deleteVehicle(vehId);
	};

	handleCardClick = () => {};

	renderVehicles = vehicles => {
		return vehicles.map((vehicle, idx) => {
			return <Vehicle handleDelete={this.handleDelete} key={idx} vehicle={vehicle} />;
		});
	};

	render() {
		return <div>{this.renderVehicles(this.props.vehicles)}</div>;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteVehicle: vehId => dispatch(deleteVehicle(vehId))
	};
};

export default connect(null, mapDispatchToProps)(Vehicles);
