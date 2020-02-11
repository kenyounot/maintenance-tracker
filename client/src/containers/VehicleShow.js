import React, { Component } from 'react';
import VehicleWelcome from '../components/VehicleWelcome';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/fetchVehicles';

export class VehicleShow extends Component {
	componentDidMount() {
		this.props.fetchVehicles();
	}

	render() {
		console.log(this.props.vehicle);

		return (
			<div>
				<VehicleWelcome make={this.props.vehicle.make} model={this.props.vehicle.model} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const vehicleId = parseInt(ownProps.match.params.vehicleId, 10);

	return {
		vehicle: state.vehicleReducer.vehicles.find(vehicle => vehicle.id === vehicleId) || []
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchVehicles: () => dispatch(fetchVehicles())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleShow);
