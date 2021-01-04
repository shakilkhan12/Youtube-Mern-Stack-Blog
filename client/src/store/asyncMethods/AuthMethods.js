import axios from 'axios';
export const postRegister = (state) => {
	return async (dispatch) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		dispatch({ type: 'SET_LOADER' });
		try {
			const response = await axios.post('/register', state, config);
			dispatch({ type: 'CLOSE_LOADER' });
			console.log(response);
		} catch (error) {
			dispatch({ type: 'CLOSE_LOADER' });
			dispatch({
				type: 'REGISTER_ERRORS',
				payload: error.response.data.errors,
			});
			console.log(error.response);
		}
	};
};
