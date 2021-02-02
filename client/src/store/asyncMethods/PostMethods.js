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
} from '../types/PostTypes';
const token = localStorage.getItem('myToken');
export const createAction = (postData) => {
	return async (dispatch) => {
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
