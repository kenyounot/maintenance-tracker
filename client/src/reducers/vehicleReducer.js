const initialState = {
	vehicles: [],
	loading: false
};

const vehicleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCHING_VEHICLES':
			return {
				...state,
				loading: true
			};

		case 'FETCH_VEHICLES':
			return {
				...state,
				vehicles: [...action.payload],
				loading: false
			};

		case 'CREATE_VEHICLE':
			return {
				...state,
				vehicles: state.vehicles.concat(action.payload)
			};

		case 'DELETE_VEHICLE':
			return {
				...state,
				vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload)
			};

		default:
			return state;
	}
};

export default vehicleReducer;
