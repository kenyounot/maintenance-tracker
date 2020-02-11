import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class AddMaintenanceModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			kind: '',
			mileage: '',
			parts: '',
			description: '',
			price: ''
		};
	}

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.onHide();
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
					<Modal.Title id='contained-modal-title-vcenter'>Add Maintenance</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='container'>
						<Form onSubmit={this.handleOnSubmit}>
							<Form.Group controlId='kind'>
								<Form.Label>Maintenance Type</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='text'
									name='kind'
									value={this.state.kind}
									required
									placeholder='Maintenance Type'
								/>
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

							<Form.Group controlId='parts'>
								<Form.Label>Parts used</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='text'
									name='parts'
									value={this.state.parts}
									required
									placeholder='Parts used'
								></Form.Control>
							</Form.Group>

							<Form.Group controlId='price'>
								<Form.Label>Price</Form.Label>
								<Form.Control
									onChange={this.handleOnChange}
									type='number'
									name='price'
									value={this.state.price}
									required
									placeholder='Maintenance Cost'
								></Form.Control>
							</Form.Group>

							<Form.Group>
								<Button variant='primary' type='submit'>
									Add Maintenance
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

const mapDispatchToProps = dispatch => {};

export default connect(null, mapDispatchToProps)(AddMaintenanceModal);
