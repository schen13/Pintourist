import React from 'react';
import { withRouter } from 'react-router-dom';
import UserInfo from './user_info';
import ProfileTabs from './profile_tabs';
import { selectBoardsForUser, selectPinsForUser } from '../../reducers/selectors';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    const { users, boards, pins, usernameMapping } = this.props;
    const userId = usernameMapping[this.props.match.params.username];
    const selectedUser = users[userId];
    const selectedBoards = selectBoardsForUser(boards, userId);
    const selectedPins = selectPinsForUser(pins, userId);
    if (!selectedUser) return <div>Loading...</div>;
    return (
      <div className="profile-container">
        <UserInfo user={selectedUser} />
        <ProfileTabs
          user={selectedUser}
          boards={selectedBoards}
          pins={selectedPins} />
      </div>
    );
  }
}

export default withRouter(Profile);
