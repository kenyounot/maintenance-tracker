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
		})
			.then(res => res.json())
			.then(data => {
				dispatch(dispatchMaintenance(data.maintenance));
			});
	};
};

const dispatchMaintenance = maintInfo => ({
	type: 'CREATE_MAINTENANCE',
	payload: maintInfo
});
