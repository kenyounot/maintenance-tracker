const initialState = {
	vehicles: []
};

const vehicleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_VEHICLES':
			console.log('adding vehicles...');

		default:
			return state;
	}
};

export default vehicleReducer;
