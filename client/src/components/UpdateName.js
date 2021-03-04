import Helmet from 'react-helmet';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';

const UpdateName = () => {
	const [userName, setUserName] = useState('');
	const {
		user: { name },
	} = useSelector((user) => user.AuthReducer);
	useEffect(() => {
		setUserName(name);
	}, []);
	return (
		<div className='container mt-100'>
			<Helmet>
				<title>Update Name</title>
				<meta name='description' content='update the user name' />
			</Helmet>
			<div className='row ml-minus-15 mr-minus-15'>
				<div className='col-3 p-15'>
					<Sidebar />
				</div>
				<div className='col-9 p-15'>
					<div className='card'>
						<h3 className='card__h3'>Update Name</h3>
						<form>
							<div className='group'>
								<input
									type='text'
									name=''
									className='group__control'
									placeholder='Name...'
									onChange={(e) => setUserName(e.target.value)}
									value={userName}
								/>
							</div>
							<div className='group'>
								<input
									type='submit'
									value='Update Name'
									className='btn btn-default btn-block'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UpdateName;
