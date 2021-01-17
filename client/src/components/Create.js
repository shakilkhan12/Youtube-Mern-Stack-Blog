import { useState } from 'react';
import Helmet from 'react-helmet';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Create = () => {
	const [currentImage, setCurrentImage] = useState('Choose image');
	const fileHandle = (e) => {
		setCurrentImage(e.target.files[0].name);
	};
	const [state, setState] = useState({
		title: '',
	});
	const handleInputs = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const [value, setValue] = useState('');
	return (
		<div className='create mt-100'>
			<Helmet>
				<title>Create new post</title>
				<meta name='description' content='Create a new post' />
			</Helmet>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='card'>
							<h3 className='card__h3'>Create a new post</h3>
							<form>
								<div className='group'>
									<label htmlFor='title'>Post Title</label>
									<input
										type='text'
										name='title'
										id='title'
										value={state.title}
										onChange={handleInputs}
										className='group__control'
										placeholder='Post title...'
									/>
								</div>
								<div className='group'>
									<label htmlFor='image' className='image__label'>
										{currentImage}
									</label>
									<input
										type='file'
										name='picture'
										id='image'
										onChange={fileHandle}
									/>
								</div>
								<div className='group'>
									<label htmlFor='body'>
										<ReactQuill
											theme='snow'
											value={value}
											onChange={setValue}
										/>
									</label>
								</div>
								<div className='group'>
									<input
										type='submit'
										value='Create post'
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
export default Create;
