import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SignupModal from './modal/signup_modal';

const App = () => (
  <div>
    <SignupModal />
    <ProtectedRoute path="/" component={NavbarContainer} />
    {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
    {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
  </div>
);

export default App;
