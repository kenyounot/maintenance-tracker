import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarageWelcome from '../components/GarageWelcome';
import Vehicle from '../components/Vehicle';

export class Garage extends Component {
	constructor(props) {
		super(props);
	}

	renderVehicles = vehicles => {
		return vehicles.map(vehicle => {
			console.log(vehicle);

			return <Vehicle vehicle={vehicle} />;
		});
	};

	render() {
		return (
			<div>
				<GarageWelcome userName={this.props.userName} />
				{this.renderVehicles(this.props.vehicles)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.userReducer.currentUser.name,
		vehicles: state.vehicleReducer.vehicles
	};
};

export default connect(mapStateToProps)(Garage);
