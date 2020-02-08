export const userFetchProfile = () => {
	return dispatch => {
		const token = localStorage.token;
		if (token) {
			return fetch('http://localhost:3000/api/v1/profile', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${token}`
				}
			})
				.then(resp => resp.json())
				.then(data => {
					if (data.user.id) {
						dispatch(loginUser(data.user));
					} else {
						localStorage.removeItem('token');
					}
				});
		}
	};
};

const loginUser = userObj => ({
	type: 'LOGIN_USER',
	payload: userObj
});
