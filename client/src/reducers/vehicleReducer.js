const initialState = {
	vehicles: []
};

const vehicleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_VEHICLES':
			return {
				...state,
				vehicles: state.vehicles.concat(action.payload.map(vehicle => vehicle))
			};

		default:
			return state;
	}
};

export default vehicleReducer;
