export const deleteMaintenance = maintId => {
	const token = localStorage.getItem('token');

	return dispatch => {
		return fetch(`/api/v1/maintenances/${maintId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'appliction/json',
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				dispatch(dispatchDelete(data.id));
			});
	};
};

const dispatchDelete = maintId => ({
	type: 'DELETE_MAINTENANCE',
	payload: maintId
});
