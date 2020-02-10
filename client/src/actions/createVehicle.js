export const createVehicle = vehicle => {
	return dispatch => {
		return fetch('/api/v1/vehicles');
	};
};
