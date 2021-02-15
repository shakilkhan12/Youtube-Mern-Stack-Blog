import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/asyncMethods/PostMethods';
import { POST_RESET } from '../store/types/PostTypes';
const Edit = () => {
	const { id } = useParams();
	const [value, setValue] = useState('');
	const [state, setState] = useState({
		title: '',
		description: '',
	});
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.PostReducer);
	const { post, postStatus } = useSelector((state) => state.FetchPost);
	useEffect(() => {
		if (postStatus) {
			setState({
				title: post.title,
				description: post.description,
			});
			setValue(post.body);
			dispatch({ type: POST_RESET });
		} else {
			dispatch(fetchPost(id));
		}
	}, [post]);
	console.log(post);
	return (
		<div className='mt-100'>
			<Helmet>
				<title>Edit post</title>
				<meta name='description' content='update post' />
			</Helmet>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='card'>
							<h3 className='card__h3'>Edit post</h3>
							<form>
								<div className='group'>
									<label htmlFor='title'>Post title</label>
									<input
										type='text'
										name='title'
										id='title'
										className='group__control'
										placeholder='Post title'
										value={state.title}
										onChange={(e) =>
											setState({ ...state, title: e.target.value })
										}
									/>
								</div>
								<div className='group'>
									<label htmlFor='body'>Post body</label>
									<ReactQuill
										theme='snow'
										id='body'
										placeholder='Post body...'
										value={value}
										onChange={setValue}
									/>
								</div>
								<div className='group'>
									<label htmlFor='description'>Meta Description</label>
									<textarea
										name='description'
										id='description'
										cols='30'
										rows='10'
										defaultValue={state.description}
										onChange={(e) =>
											setState({ ...state, description: e.target.value })
										}
										className='group__control'
										placeholder='meta description...'
										maxLength='150'></textarea>
									<p className='length'>
										{state.description ? state.description.length : 0}
									</p>
								</div>
								<div className='group'>
									<input
										type='submit'
										value='Edit'
										className='btn btn-default btn-block'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Edit;
