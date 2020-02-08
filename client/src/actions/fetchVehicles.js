export const fetchVehicles = () => (dispatch, getState) => {
	const state = getState();
	const userId = state.userReducer.currentUser.id;
	const token = localStorage.getItem('token');

	dispatch({ type: 'START_FETCHING_VEHICLES' });
	fetch(`/api/v1/vehicles/${userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(data => {
			dispatch(storeVehicles(data.vehicles));
		});
};

const storeVehicles = vehicles => ({
	type: 'ADD_VEHICLES',
	payload: vehicles
});
