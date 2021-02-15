import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { REDIRECT_FALSE, REMOVE_MESSAGE } from '../store/types/PostTypes';
import { fetchPosts } from '../store/asyncMethods/PostMethods';
import { BsPencil, BsArchive } from 'react-icons/bs';
import Loader from './Loader';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
const Dashboard = () => {
	const { redirect, message, loading } = useSelector(
		(state) => state.PostReducer
	);
	const {
		user: { _id },
	} = useSelector((state) => state.AuthReducer);
	const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
	let { page } = useParams();
	if (page === undefined) {
		page = 1;
	}
	const dispatch = useDispatch();
	useEffect(() => {
		if (redirect) {
			dispatch({ type: REDIRECT_FALSE });
		}
		if (message) {
			toast.success(message);
			dispatch({ type: REMOVE_MESSAGE });
		}
		dispatch(fetchPosts(_id, page));
	}, [page]);
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
				<div className='row ml-minus-15 mr-minus-15'>
					<div className='col-3 p-15'>
						<Sidebar />
					</div>
					<div className='col-9 p-15'>
						{!loading ? (
							posts.length > 0 ? (
								posts.map((post) => (
									<div className='dashboard__posts' key={post._id}>
										<div className='dashboard__posts__title'>
											<Link to='/'>{post.title}</Link>
										</div>
										<div className='dashboard__posts__links'>
											<Link to={`/edit/${post._id}`}>
												<BsPencil className='icon' />
											</Link>
											<BsArchive className='icon' />
										</div>
									</div>
								))
							) : (
								'You dont have any post'
							)
						) : (
							<Loader />
						)}
						<Pagination page={page} perPage={perPage} count={count} />
					</div>
				</div>
			</div>
		</>
	);
};
export default Dashboard;
