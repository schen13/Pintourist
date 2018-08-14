import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupModal from './modal/signup_modal';
import NavbarContainer from './navbar/navbar_container';
import ProfileContainer from './profile/profile_container';
import BoardModal from './modal/board_modal';
import PinModal from './modal/pin_modal';

const App = () => (
  <div className="webpage">
    <BoardModal />
    <PinModal />
    <AuthRoute path="/" component={SignupModal} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <ProtectedRoute path="/:username" component={ProfileContainer} />
  </div>
);

export default App;
