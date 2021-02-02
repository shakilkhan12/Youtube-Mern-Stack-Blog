import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../store/types/PostTypes';
const Dashboard = () => {
	const { redirect, message } = useSelector((state) => state.PostReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		if (redirect) {
			dispatch({ type: REDIRECT_FALSE });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: REMOVE_MESSAGE });
		}
	}, []);
	return (
		<>
			<Helmet>
				<title>User Dashboard</title>
				<meta name='description' content='User Dashboard' />
			</Helmet>
			<Toaster
				position='top-center'
				reverseOrder={false}
				toastOptions={{
					style: {
						fontSize: '14px',
					},
				}}
			/>
			<h1>Dashboard</h1>
		</>
	);
};
export default Dashboard;
