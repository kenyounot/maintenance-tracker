export const createMaintenance = maintenance => {
	const token = localStorage.getItem('token');

	return dispatch => {
		return fetch('/api/v1/maintenances', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ maintenance })
		});
	};
};
