import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
						<Row>
							<Col sm={6}>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId='year'>
										<Form.Label>Year</Form.Label>
										<Form.Control type='number' name='year' required placeholder='2000' />
									</Form.Group>

									<Form.Group>
										<Button variant='primary' type='submit'>
											Add Vehicle
										</Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default AddVehicleModal;
