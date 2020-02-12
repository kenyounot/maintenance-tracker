export const fetchMaintenances = vehId => dispatch => {
	const token = localStorage.getItem('token');

	dispatch({ type: 'FETCHING_MAINTENANCES' });
	fetch(`/api/v1/getMaintenances/${vehId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(res => res.json())
		.then(data => {
			dispatch(storeMaintenances(data.maintenances));
		});
};

const storeMaintenances = maintInfo => ({
	type: 'FETCH_MAINTENANCES',
	payload: maintInfo
});
