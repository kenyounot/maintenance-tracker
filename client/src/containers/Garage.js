import React, { Component } from 'react';
import { connect } from 'react-redux';
import GarageWelcome from '../components/GarageWelcome';

export class Garage extends Component {
	constructor(props) {
		super(props);
	}

	renderCars = vehicles => {
		return vehicles.map(vehicle => {});
	};

	render() {
		return (
			<div>
				<GarageWelcome userName={this.props.userName} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.userReducer.currentUser.name
	};
};

export default connect(mapStateToProps)(Garage);
