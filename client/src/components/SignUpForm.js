import React from 'react';

const SignUpForm = () => {
	return (
		<div>
			<h2>Sign Up Below</h2>
			<form>
				<input type='text' placeholder='Name' />
				<br />
				<input type='email' placholder='Email' />
				<br />
				<input type='password' placeholder='Password' />
			</form>
		</div>
	);
};

export default SignUpForm;
