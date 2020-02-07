import React from 'react';

const initialState = {
	currentUser: {}
};

const userReducer = (state = initialState, action) => {
	console.log('hitting here.');
	console.log(action);
	console.log(state);

	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				currentUser: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
