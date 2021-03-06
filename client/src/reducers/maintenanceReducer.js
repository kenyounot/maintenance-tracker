const initialState = {
	maintenances: [],
	loading: false
};

const maintenanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCHING_MAINTENANCES':
			return {
				...state,
				loading: true
			};

		case 'FETCH_MAINTENANCES':
			return {
				...state,
				maintenances: [...action.payload],
				loading: false
			};

		case 'CREATE_MAINTENANCE':
			return {
				...state,
				maintenances: state.maintenances.concat(action.payload)
			};

		case 'DELETE_MAINTENANCE':
			return {
				...state,
				maintenances: state.maintenances.filter(
					maintenance => maintenance.id !== action.payload
				)
			};

		default:
			return state;
	}
};

export default maintenanceReducer;
