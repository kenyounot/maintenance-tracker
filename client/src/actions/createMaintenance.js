export const createMaintenance = maintInfo => {
	return dispatch => {
		return fetch(/api/1v / maintenances);
	};
};
