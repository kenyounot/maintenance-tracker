import React from 'react';

const LoginForm = props => {
	return (
		<div>
			<h2>Login Below</h2>
			<form className='input-form' onSubmit={props.handleOnSubmit}>
				<input
					onChange={props.handleOnChange}
					type='email'
					name='email'
					placeholder='Enter email...'
					value={props.userInfo.email}
				/>
				<br />
				<input
					onChange={props.handleOnChange}
					type='password'
					name='password'
					placeholder='Enter password...'
					value={props.userInfo.password}
				/>
				<br />
				<input type='submit' value='Login' />
			</form>
			Don't have an account?
			<button onClick={props.handleCreateClick}>Create Account</button>
		</div>
	);
};

export default LoginForm;
