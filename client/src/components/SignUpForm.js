import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpForm = props => {
	return (
		<div className='form-component'>
			<h2>Welcome to the Vehicle Maintenance app</h2>
			<h4>Create Account</h4>
			<Form className='form' onSubmit={props.handleOnSubmit}>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='text'
						name='name'
						placeholder='Name'
						value={props.userInfo.name}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='email'
						name='email'
						placeholder='Email'
						value={props.userInfo.userName}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='password'
						name='password'
						placeholder='Password'
						value={props.userInfo.password}
					/>
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password Confirmation</Form.Label>
					<Form.Control
						onChange={props.handleOnChange}
						type='password'
						name='password_confirmation'
						placeholder='Password Confirm'
						value={props.userInfo.password_confirmation}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Create Account
				</Button>
				Or
				<Button variant='primary' onClick={props.handleLoginClick}>
					Login
				</Button>
			</Form>
		</div>
	);
};

export default SignUpForm;
