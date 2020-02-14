import React, { Component } from 'react';
import VehicleWelcome from '../components/VehicleWelcome';
import AddMaintenanceModal from '../components/AddMaintenanceModal';
import Maintenances from './Maintenances';
import { deleteMaintenance } from '../actions/deleteMaintenance';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { connect } from 'react-redux';

export class VehicleShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	handleDelete = event => {
		const maintId = event.target.getAttribute('maintenance-id');

		this.props.deleteMaint(maintId);
	};

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
						vehicleId={this.props.match.params.vehicleId}
						show={this.state.modalShow}
						onHide={() => this.toggleModalShow()}
					/>
				</ButtonToolbar>

				<Maintenances
					handleDelete={this.handleDelete}
					maintenances={this.props.maintenances}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const vehicleId = parseInt(ownProps.match.params.vehicleId, 10);

	return {
		vehicle:
			state.vehicleReducer.vehicles.find(vehicle => vehicle.id === vehicleId) || [],
		maintenances: state.maintenanceReducer.maintenances.filter(
			maintenance => maintenance.vehicle_id === vehicleId
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteMaint: maintId => dispatch(deleteMaintenance(maintId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleShow);
