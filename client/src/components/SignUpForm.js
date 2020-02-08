import React from 'react';

const SignUpForm = props => {
	return (
		<div>
			<h2>Sign Up Below</h2>
			<form onSubmit={props.handleOnSubmit} className='signup-form'>
				<input
					onChange={props.handleOnChange}
					type='text'
					name='name'
					placeholder='Name'
					value={props.userInfo.name}
				/>
				<br />
				<input
					onChange={props.handleOnChange}
					type='email'
					name='email'
					placeholder='Email'
					value={props.userInfo.userName}
				/>
				<br />
				<input
					onChange={props.handleOnChange}
					type='password'
					name='password'
					placeholder='Password'
					value={props.userInfo.password}
				/>
				<br />
				<input
					onChange={props.handleOnChange}
					type='password'
					name='password_confirmation'
					placeholder='Password Confirm'
					value={props.userInfo.password_confirmation}
				/>
				<br />
				<input type='submit' value='Create Account' />
			</form>
			Already have an account?
			<button onClick={props.handleLoginClick}>Login</button>
		</div>
	);
};

export default SignUpForm;
