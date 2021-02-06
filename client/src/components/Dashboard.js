import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../store/types/PostTypes';
import { fetchPosts } from '../store/asyncMethods/PostMethods';
import { BsPencil, BsArchive } from 'react-icons/bs';
const Dashboard = () => {
	const { redirect, message, loading } = useSelector(
		(state) => state.PostReducer
	);
	const {
		user: { _id },
	} = useSelector((state) => state.AuthReducer);
	const { posts } = useSelector((state) => state.FetchPosts);
	console.log('my porsts:', posts);
	const dispatch = useDispatch();
	useEffect(() => {
		if (redirect) {
			dispatch({ type: REDIRECT_FALSE });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: REMOVE_MESSAGE });
		}
		dispatch(fetchPosts(_id));
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
			<div className='container mt-100'>
				<div className='row'>
					<div className='col-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
						tenetur doloribus itaque. Dolores alias reprehenderit quasi error
						provident itaque tenetur cumque sunt id sapiente. Expedita id
						accusamus deleniti doloremque dolore.
					</div>
					<div className='col-9'>
						{!loading
							? posts.length > 0
								? posts.map((post) => (
										<div className='dashboard__posts' key={post._id}>
											<div className='dashboard__posts__title'>
												<Link to='/'>{post.title}</Link>
											</div>
											<div className='dashboard__posts__links'>
												<Link to='/'>
													<BsPencil className='icon' />
												</Link>
												<BsArchive className='icon' />
											</div>
										</div>
								  ))
								: 'You dont have any post'
							: 'loading...'}
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
