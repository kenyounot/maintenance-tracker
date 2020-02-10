import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createVehicle } from '../actions/createVehicle';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class AddVehicleModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			year: '',
			make: '',
			model: '',
			mileage: ''
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.onHide();

		this.props.createVehicle(this.state);
	};

	handleOnChange = event => {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<Modal
				{...this.props}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>Add Vehicle</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<Form onSubmit={this.handleOnSubmit}>
							<Form.Group controlId='year'>
								<Form.Label>Year</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='number'
									name='year'
									value={this.state.year}
									required
									placeholder='2000'
									min='1996'
									max='2020'
								/>
							</Form.Group>

							<Form.Group controlId='make'>
								<Form.Label>Make</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='text'
									name='make'
									value={this.state.make}
									required
									placeholder='Vehicle make'
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='model'>
								<Form.Label>Model</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='text'
									name='model'
									value={this.state.model}
									required
									placeholder='Vehicle model'
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='mileage'>
								<Form.Label>Mileage</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='number'
									name='mileage'
									value={this.state.mileage}
									required
									placeholder='Vehicle mileage'
								></Form.Control>
							</Form.Group>

							<Form.Group>
								<Button variant='primary' type='submit'>
									Add Vehicle
								</Button>
							</Form.Group>
						</Form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='danger' onClick={this.props.onHide}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createVehicle: vehicleInfo => dispatch(createVehicle(vehicleInfo))
	};
};

export default connect(null, mapDispatchToProps)(AddVehicleModal);
