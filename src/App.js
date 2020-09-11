import React from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Login from './containers/Login/Login';
import Layout from './containers/Layout/Layout';
import About from './containers/About/About';
import Signup from './containers/Signup/Signup';
import Main from './containers/Main/Main';
import Template from './containers/Template/Template';
import Auth from './containers/Auth/Auth';
import InfoForm from './containers/InfoForm/InfoForm';
import Template1 from './containers/Template 1/Template1';
import Template2 from './containers/Template 2/Template2';
import Template3 from './containers/Template 3/Template3';
import Template4 from './containers/Template 4/Template4';
import Contact from './containers/Contact/Contact';

const app = () => {

  const PrivateRoute = ({component: Component, ...rest}) => 
  (<Route {...rest} render={props => Auth.getAuth()
    ? (<Component {...props} /> ) 
    : (<Redirect to={{ pathname: "/" }} /> )
   } />
  );

  let routes = (

    <Switch>
      <Route exact path="/" component={Layout} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/template" component={Template} />
      <Route path="/main" component={Main} />
      <PrivateRoute path="/infoForm" component={InfoForm} />
      <PrivateRoute path="/template1" component={Template1} />
      <PrivateRoute path="/template2" component={Template2} />
      <PrivateRoute path="/template3" component={Template3} />
      <PrivateRoute path="/template4" component={Template4} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
        {routes}
    </div>
  );
}

export default withRouter(app);
