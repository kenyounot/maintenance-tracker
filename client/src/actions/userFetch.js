export const userPostFetch = user => {
	return dispatch => {
		return fetch('/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({ user })
		})
			.then(resp => resp.json())
			.then(data => {
				if (data.jwt) {
					localStorage.setItem('token', data.jwt);

					dispatch(loginUser(data.user));
				} else {
				}
			});
	};
};

const loginUser = userObj => ({
	type: 'LOGIN_USER',
	payload: userObj
});
