const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
};
const AuthReducer = (state = initState, action) => {
	if (action.type === 'SET_LOADER') {
		return { ...state, loading: true };
	} else if (action.type === 'CLOSE_LOADER') {
		return { ...state, loading: false };
	} else if (action.type === 'REGISTER_ERRORS') {
		return { ...state, registerErrors: action.payload };
	} else {
		return state;
	}
};
export default AuthReducer;
