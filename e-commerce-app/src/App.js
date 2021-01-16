import Login from './components/login-page/login'
import SignUp from './components/signup-page/signUp'
import MainUser from './components/main-user-page/main-user'
import Item from './components/item-page/item'
import Checkout from './components/checkout-page/checkout'
import MainAdmin from './components/main-admin-page/main-admin'
import Create from './components/create-page/create'
import EditDelete from './components/edit&delete-page/edit-delete'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
  const loggedIn = useSelector(state => state.login.loggedIn)
  return (
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route {...rest} render={props => (
          loggedIn ?
              <Component {...props} />
          : <Redirect to="/" />
      )} />
  );
};


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/main-user" component={MainUser} />
        <PrivateRoute exact path="/item" component={Item} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <PrivateRoute exact path="/main-admin" component={MainAdmin} />
        <PrivateRoute exact path="/create" component={Create} />
        <PrivateRoute exact path="/edit-delete" component={EditDelete} />
      </Switch>
    </Router>
  );
}

export default App;
