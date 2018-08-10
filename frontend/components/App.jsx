import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupModal from './modal/signup_modal';
import ProfileContainer from './profile/profile_container';

const App = () => (
  <div>
    <AuthRoute path="/" component={SignupModal} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
  </div>
);

export default App;
