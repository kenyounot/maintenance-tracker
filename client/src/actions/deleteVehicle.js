export const deleteVehicle = vehicleId => {
	const token = localStorage.getItem('token');
	return dispatch => {
		return fetch(`/api/v1/vehicles/${vehicleId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				dispatch(dispatchDelete(data.id));
			});
	};
};

const dispatchDelete = vehId => ({
	type: 'DELETE_VEHICLE',
	payload: vehId
});
