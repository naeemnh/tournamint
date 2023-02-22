import { FETCH_USER } from "../actions/types";

/**
 * Update State of User
 * @param {import("history").State} state
 * @param {import("react").ReducerAction} action Action to be taken by the redux store
 * @returns User data | null
 */
const authReducer = (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
};

export default authReducer;