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
			console.log(action.payload);

			return {
				...state,
				vehicles: [...action.payload],
				loading: false
			};

		case 'CREATE_VEHICLE':
			console.log(action.payload);

			return {
				...state,
				vehicles: state.vehicles.concat(action.payload)
			};

		default:
			return state;
	}
};

export default vehicleReducer;
