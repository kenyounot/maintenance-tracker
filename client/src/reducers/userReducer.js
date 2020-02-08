const initialState = {
	currentUser: {},
	loggedIn: false
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				currentUser: action.payload,
				loggedIn: true
			};

		default:
			return state;
	}
};

export default userReducer;
