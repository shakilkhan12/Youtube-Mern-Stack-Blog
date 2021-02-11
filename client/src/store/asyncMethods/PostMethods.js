import axios from 'axios';
import {
	CREATE_ERRORS,
	REMOVE_ERRORS,
	SET_LOADER,
	CLOSE_LOADER,
	REDIRECT_TRUE,
	REDIRECT_FALSE,
	SET_MESSAGE,
	REMOVE_MESSAGE,
	SET_POSTS,
} from '../types/PostTypes';

export const createAction = (postData) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({ type: SET_LOADER });
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const {
				data: { msg },
			} = await axios.post('/create_post', postData, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: REMOVE_ERRORS });
			dispatch({ type: REDIRECT_TRUE });
			dispatch({ type: SET_MESSAGE, payload: msg });
		} catch (error) {
			console.log(error.response);
			const { errors } = error.response.data;
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: CREATE_ERRORS, payload: errors });
		}
	};
};
export const fetchPosts = (id, page) => {
	return async (dispatch, getState) => {
		const {
			AuthReducer: { token },
		} = getState();
		dispatch({ type: SET_LOADER });
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
			const {
				data: { response, count, perPage },
			} = await axios.get(`/posts/${id}/${page}`, config);
			dispatch({ type: CLOSE_LOADER });
			dispatch({ type: SET_POSTS, payload: { response, count, perPage } });
		} catch (error) {
			dispatch({ type: CLOSE_LOADER });
		}
	};
};
