export const createVehicle = vehicle => {
	const token = localStorage.getItem('token');
	return dispatch => {
		return fetch('/api/v1/vehicles', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ vehicle })
		})
			.then(res => res.json())
			.then(vehicle => {
				console.log(vehicle);
			});
	};
};
