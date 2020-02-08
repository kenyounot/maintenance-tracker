// export function fetchVehicles() {
// 	console.log('hello');

// 	return (dispatch, getState) => {
// 		const state = getState();

// 		console.log('hello');

// 		console.log(state);

// 		// dispatch({ type: 'START_FETCHING_VEHICLES' });
// 		// fetch(`/api/v1/vehicles/${userId}`);
// 	};
// }

export const fetchVehicles = () => (dispatch, getState) => {
	const state = getState();

	const userId = state.userReducer.currentUser.id;
	console.log(state.userReducer);

	// dispatch({ type: 'START_FETCHING_VEHICLES' });
	// fetch(`/api/v1/vehicles/${userId}`)
	// 	.then(res => res.json())
	// 	.then(vehicles =>
	dispatch({ type: 'ADD_VEHICLES' });
};
