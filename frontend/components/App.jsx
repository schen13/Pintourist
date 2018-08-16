import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupModal from './modal/signup_modal';
import NavbarContainer from './navbar/navbar_container';
import ProfileContainer from './profile/profile_container';
import DiscoverFeed from './discover_feed';
import BoardDetailContainer from './board/board_detail_container';
import PinDetailContainer from './pin/pin_detail_container';
import BoardModal from './modal/board_modal';
import PinModal from './modal/pin_modal';
import PinningModal from './modal/pinning_modal';

const App = () => (
  <div className="webpage">
    <BoardModal />
    <PinModal />
    <PinningModal />
    <AuthRoute path="/" component={SignupModal} />
    <ProtectedRoute path="/" component={NavbarContainer} />
    <Switch>
      {/* <ProtectedRoute exact path="/" component={DiscoverFeed} /> */}
      <ProtectedRoute exact path="/pin/:pinId" component={PinDetailContainer} />
      <ProtectedRoute exact path="/:username" component={ProfileContainer} />
      <ProtectedRoute exact path="/:username/:boardTitle" component={BoardDetailContainer} />
    </Switch>
  </div>
);

export default App;
