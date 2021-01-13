import Login from './components/login-page/login'
import SignUp from './components/signup-page/signUp'
import MainUser from './components/main-user-page/main-user'
import Checkout from './components/checkout-page/checkout'
import MainAdmin from './components/main-admin-page/main-admin'
import Create from './components/create-page/create'
import EditDelete from './components/edit&delete-page/edit-delete'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/main-user" component={MainUser} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/main-admin" component={MainAdmin} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/edit-delete" component={EditDelete} />
      </Switch>
    </Router>
  );
}

export default App;
