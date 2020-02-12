export const fetchMaintenances = () => dispatch => {
	const token = localStorage.getItem('token');

	dispatch({ type: 'FETCHING_VEHICLES' });
	fetch(`/api/v1/maintenances`, {
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
