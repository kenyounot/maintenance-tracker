export const fetchVehicles = () => dispatch => {
	const token = localStorage.getItem('token');

	dispatch({ type: 'FETCHING_VEHICLES' });
	fetch(`/api/v1/getvehicles`, {
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
	type: 'FETCH_VEHICLES',
	payload: vehicles
});
