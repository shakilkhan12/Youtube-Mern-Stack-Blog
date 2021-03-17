import {
	RESET_PROFILE_ERRORS,
	SET_PROFILE_ERRORS,
} from '../types/ProfileTypes';
const initState = {
	updateErrors: [],
};
export const updateName = (state = initState, action) => {
	const { type, payload } = action;
	if (type === SET_PROFILE_ERRORS) {
		return {
			...state,
			updateErrors: payload,
		};
	} else if (type === RESET_PROFILE_ERRORS) {
		return {
			...state,
			updateErrors: [],
		};
	} else {
		return state;
	}
};
