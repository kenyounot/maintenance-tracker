import React, { Component } from 'react';
import VehicleWelcome from '../components/VehicleWelcome';
import AddMaintenanceModal from '../components/AddMaintenanceModal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/fetchVehicles';

export class VehicleShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	componentDidMount() {
		this.props.fetchVehicles();
	}

	toggleModalShow = () => {
		this.setState({
			modalShow: !this.state.modalShow
		});
	};

	render() {
		return (
			<div>
				<VehicleWelcome make={this.props.vehicle.make} model={this.props.vehicle.model} />

				<ButtonToolbar>
					<Button
						vehicle-id={this.props.match.params.vehicleId}
						onClick={() => this.toggleModalShow()}
						variant='primary'
					>
						Add Maintenance
					</Button>
					<AddMaintenanceModal
						show={this.state.modalShow}
						onHide={() => this.toggleModalShow()}
					/>
				</ButtonToolbar>
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
