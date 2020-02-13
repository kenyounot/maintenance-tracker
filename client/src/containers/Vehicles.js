import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deleteVehicle } from '../actions/deleteVehicle';
import VehicleCard from '../components/VehicleCard';
import CardDeck from 'react-bootstrap/CardDeck';

export class Vehicles extends Component {
	handleDelete = event => {
		const vehId = event.target.getAttribute('vehicle-id');

		this.props.deleteVehicle(vehId);
	};

	handleCardClick = event => {
		const vehicleId = event.target.closest('div').getAttribute('vehicle-id');

		this.props.history.push(`/vehicles/${vehicleId}`);
	};

	renderVehicles = vehicles => {
		return vehicles.map((vehicle, idx) => {
			return (
				<VehicleCard
					handleCardClick={this.handleCardClick}
					handleDelete={this.handleDelete}
					key={idx}
					vehicle={vehicle}
				/>
			);
		});
	};

	render() {
		return <CardDeck>{this.renderVehicles(this.props.vehicles)}</CardDeck>;
	}
}

const mapDispatchToProps = dispatch => {
	return {
		deleteVehicle: vehId => dispatch(deleteVehicle(vehId))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(Vehicles));
