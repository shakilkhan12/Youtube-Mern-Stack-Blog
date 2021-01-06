import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './main.scss';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Store from './store';
function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/register' exact component={Register} />
					<Route path='/login' exact component={Login} />
					<Route path='/dashboard' exact component={Dashboard} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
