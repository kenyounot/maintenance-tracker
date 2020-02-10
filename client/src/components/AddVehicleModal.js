import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class AddVehicleModal extends Component {
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
						<Form onSubmit={this.handleSubmit}>
							<Form.Group controlId='year'>
								<Form.Label>Year</Form.Label>
								<Form.Control
									type='number'
									name='year'
									required
									placeholder='2000'
									min='1996'
									max='2020'
								/>
							</Form.Group>

							<Form.Group controlId='make'>
								<Form.Label>Make</Form.Label>
								<Form.Control
									type='text'
									name='make'
									required
									placeholder='Vehicle make'
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='model'>
								<Form.Label>Model</Form.Label>
								<Form.Control
									type='text'
									name='model'
									required
									placeholder='Vehicle model'
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='mileage'>
								<Form.Label>Mileage</Form.Label>
								<Form.Control
									type='number'
									name='mileage'
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

export default AddVehicleModal;
