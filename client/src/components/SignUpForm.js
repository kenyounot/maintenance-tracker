import React, { Component } from 'react';

export class SignUpForm extends Component {
	render() {
		return (
			<div>
				<h2>Sign Up Below</h2>
				<form>
					<input type='text' placeholder='Name' />
					<br />
					<input type='email' placholder='Email' />
					<br />
					<input type='password' placeholder='Password' />
					<br />
					<input type='password' placeholder='Password Confirm' />
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
