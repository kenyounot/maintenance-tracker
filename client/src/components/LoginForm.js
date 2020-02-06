import React from 'react';

const LoginForm = () => {
	return (
		<div>
			<h2>Login Below</h2>
			<form>
				<input type='email' placeholder='Enter email...' />
				<br />
				<input type='password' placeholder='Enter password...' />
				<br />
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default LoginForm;
