import { Helmet } from 'react-helmet';
const Home = () => {
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
