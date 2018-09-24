import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupModal from './modal/signup_modal';
import NavbarContainer from './navbar/navbar_container';
import ProfileContainer from './profile/profile_container';
import DiscoverFeedContainer from './discover_feed/discover_feed_container';
import BoardDetailContainer from './board/board_detail_container';
import PinDetailContainer from './pin/pin_detail_container';
import BoardModal from './modal/board_modal';
import PinModal from './modal/pin_modal';
import PinningModal from './modal/pinning_modal';
import EditProfileFormContainer from './profile/edit_profile_form_container';
import Notification from './notification';

const App = () => (
  <div className="webpage">
    <BoardModal />
    <PinModal />
    <PinningModal />
    <Notification />
    <AuthRoute path="/signup" component={SignupModal} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <Switch>
      <ProtectedRoute exact path="/pin/:pinId" component={PinDetailContainer} />
      <ProtectedRoute exact path="/account" component={EditProfileFormContainer} />
      <ProtectedRoute exact path="/:username" component={ProfileContainer} />
      <ProtectedRoute exact path="/:username/:boardTitle" component={BoardDetailContainer} />
      <ProtectedRoute exact path="/" component={DiscoverFeedContainer} />
    </Switch>
  </div>
);

export default App;
