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

		default:
			return state;
	}
};

export default vehicleReducer;
