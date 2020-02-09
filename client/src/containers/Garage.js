import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarageWelcome from '../components/GarageWelcome';
import Vehicles from '../components/Vehicles';

export class Garage extends Component {
	render() {
		return (
			<div>
				<GarageWelcome userName={this.props.userName} />
				<button>Add Vehicle</button>
				<Vehicles vehicles={this.props.vehicles} />
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
