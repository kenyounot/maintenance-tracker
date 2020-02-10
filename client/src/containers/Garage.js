import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from '../actions/fetchVehicles';
import GarageWelcome from '../components/GarageWelcome';
import Vehicles from '../components/Vehicles';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AddVehicleModal from '../components/AddVehicleModal';

export class Garage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		};
	}

	componentDidMount() {
		this.props.fetchVehicles();
	}

	handleVehicleLoading = () => {
		if (this.props.loading) {
			return (
				<Spinner animation='border' role='status'>
					<span className='sr-only'>Loading...</span>
				</Spinner>
			);
		} else if (this.props.vehicles.length < 1) {
			return <h2>There are no vehicles in your garage</h2>;
		} else {
			return <Vehicles vehicles={this.props.vehicles} />;
		}
	};

	toggleModalShow = () => {
		this.setState({
			modalShow: !this.state.modalShow
		});
	};

	render() {
		const modalShow = this.state.showModal;

		return (
			<div>
				<GarageWelcome userName={this.props.userName} />
				<ButtonToolbar>
					<Button variant='primary' onClick={() => this.toggleModalShow()}>
						Add Vehicle
					</Button>
					<AddVehicleModal
						show={this.state.modalShow}
						onHide={() => this.toggleModalShow()}
					/>
				</ButtonToolbar>

				{this.handleVehicleLoading()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userName: state.userReducer.currentUser.name,
		vehicles: state.vehicleReducer.vehicles,
		loading: state.vehicleReducer.loading
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchVehicles: () => dispatch(fetchVehicles())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
