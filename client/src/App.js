import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './main.scss';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/register' exact component={Register} />
				<Route path='/login' exact component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
