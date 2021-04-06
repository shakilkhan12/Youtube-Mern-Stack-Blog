import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { htmlToText } from 'html-to-text';
import { postDetails } from '../store/asyncMethods/PostMethods';
import Loader from './Loader';
const Details = () => {
	const { id } = useParams();
	const { loading, details } = useSelector((state) => state.PostReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(postDetails(id));
	}, [id]);
	return (
		<div className='container'>
			<div className='row mt-100'>
				<div className='col-8'>
					{!loading ? (
						<div className='post__details'>
							<div className='post__header'>
								<div className='post__header__avator'>
									{details.userName ? details.userName[0] : ''}
								</div>
								<div className='post__header__user'>
									<span>{details.userName}</span>
									<span>{moment(details.updatedAt).format('MMM Do YY')}</span>
								</div>
							</div>
							<div className='post__body'>
								<h1 className='post__body__title'>{details.title}</h1>
								<div className='post__body__details'>
									{htmlToText(details.body)}
								</div>
							</div>
						</div>
					) : (
						<Loader />
					)}
				</div>
			</div>
		</div>
	);
};
export default Details;
