import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/fetchVehicles';

export class VehicleShow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vehicleId: this.props.match.params.vehicleId
		};
	}

	componentDidMount() {
		this.props.fetchVehicles();
	}

	render() {
		return (
			<div>
				<h1>{}</h1>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		vehicle: vehicleId =>
			state.vehicleReducer.vehicles.filter(vehicle => vehicle.id == vehicleId)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchVehicles: () => dispatch(fetchVehicles())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleShow);
