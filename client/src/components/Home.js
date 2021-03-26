import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { homePosts } from '../store/asyncMethods/PostMethods';
const Home = () => {
	let { page } = useParams();
	if (page === undefined) {
		page = 1;
	}
	const { loading } = useSelector((state) => state.PostReducer);
	const { posts, count, perPage } = useSelector((state) => state.FetchPosts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(homePosts());
	}, []);
	console.log('page: ', page);
	console.log('posts: ', posts);
	console.log('count: ', count);
	console.log('perPage: ', perPage);

	return (
		<>
			<Helmet>
				<title>Web articles</title>
				<meta
					name='description'
					content='Learn HTML, CSS, JavaScript, React, Vue, Flutter etc'
				/>
			</Helmet>
		</>
	);
};
export default Home;
