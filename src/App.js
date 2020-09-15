import React from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import Layout from './containers/Home/Layout/Layout';
import About from './containers/Home/About/About';
import Contact from './containers/Home/Contact/Contact';
import TermsOfService from './containers/Home/TermsOfService/TermsOfService';
import PrivacyPolicy from './containers/Home/PrivacyPolicy/PrivacyPolicy';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Main from './containers/Main/Main';
import Template from './containers/Template/Template';
import Auth from './containers/Auth/Auth';
import InfoForm from './containers/InfoForm/InfoForm';
import Template1 from './containers/Template 1/Template1';
import Template2 from './containers/Template 2/Template2';
import Template3 from './containers/Template 3/Template3';
import Template4 from './containers/Template 4/Template4';

// const Template1 = React.lazy(() => import('./containers/Template 1/Template1'));
// const Template2 = React.lazy(() => import('./containers/Template 2/Template2'));
// const Template3 = React.lazy(() => import('./containers/Template 3/Template3'));
// const Template4 = React.lazy(() => import('./containers/Template 4/Template4'));

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
     
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/termsofservice" component={TermsOfService} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route path="/main" component={Main} />
     
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      
      <PrivateRoute path="/template" component={Template} />
      <PrivateRoute path="/infoForm" component={InfoForm} />
      
      {/* <Suspense fallback={<div>Loading...</div>}><Template1/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Template2/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Template3/></Suspense>
      <Suspense fallback={<div>Loading...</div>}><Template4/></Suspense> */}

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
