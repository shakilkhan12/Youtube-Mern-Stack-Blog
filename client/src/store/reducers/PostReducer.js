import {
	SET_LOADER,
	CLOSE_LOADER,
	CREATE_ERRORS,
	REMOVE_ERRORS,
	REDIRECT_TRUE,
	REDIRECT_FALSE,
	SET_MESSAGE,
	REMOVE_MESSAGE,
} from '../types/PostTypes';
const initState = {
	loading: false,
	createErrors: [],
	redirect: false,
	message: '',
};
const PostReducer = (state = initState, action) => {
	const { type, payload } = action;
	if (type === SET_LOADER) {
		return { ...state, loading: true };
	} else if (type === CLOSE_LOADER) {
		return { ...state, loading: false };
	} else if (type === CREATE_ERRORS) {
		return { ...state, createErrors: payload };
	} else if (type === REDIRECT_TRUE) {
		return { ...state, redirect: true };
	} else if (type === REDIRECT_FALSE) {
		return { ...state, redirect: false };
	} else if (type === SET_MESSAGE) {
		return { ...state, message: action.payload };
	} else if (type === REMOVE_MESSAGE) {
		return { ...state, message: '' };
	} else if (type === REMOVE_ERRORS) {
		return { ...state, createErrors: [] };
	} else {
		return state;
	}
};
export default PostReducer;
