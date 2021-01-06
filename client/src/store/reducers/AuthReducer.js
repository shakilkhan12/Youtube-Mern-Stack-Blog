import jwt_decode from 'jwt-decode';
const initState = {
	loading: false,
	registerErrors: [],
	loginErrors: [],
	token: '',
	user: '',
};
const token = localStorage.getItem('myToken');
if (token) {
	const decodeToken = jwt_decode(token);
	const expiresIn = new Date(decodeToken.exp * 1000);
	if (new Date() > expiresIn) {
		localStorage.removeItem('myToken');
	} else {
		initState.token = token;
		const { user } = decodeToken;
		initState.user = user;
	}
}

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
