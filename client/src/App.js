import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './main.scss';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLinks';
import NotFound from './components/NotFound';
import Create from './components/Create';
import Edit from './components/Edit';
import EditImage from './components/EditImage';
import UpdateName from './components/UpdateName';
import Store from './store';
import ChangePassword from './components/ChangePassword';
import Details from './components/Details';
function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/details/:id' exact component={Details} />
					<Route path='/home/:page' exact component={Home} />
					<RouteLinks path='/register' exact component={Register} />
					<RouteLinks path='/login' exact component={Login} />
					<PrivateRoute path='/dashboard/:page?' exact component={Dashboard} />
					<PrivateRoute path='/create' exact component={Create} />
					<PrivateRoute path='/edit/:id' exact component={Edit} />
					<PrivateRoute path='/updateImage/:id' exact component={EditImage} />
					<PrivateRoute path='/updateName' exact component={UpdateName} />
					<PrivateRoute
						path='/updatePassword'
						exact
						component={ChangePassword}
					/>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
