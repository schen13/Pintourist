import React from 'react';
import { withRouter } from 'react-router-dom';
import UserInfo from './user_info';
import ProfileTabs from './profile_tabs';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDesiredUser(this.props.user.id);
  }

  render() {
    const { user, boards, pins } = this.props;
    if (!user) return <div>Loading...</div>;
    return (
      <div className="profile-container">
        <UserInfo user={user} />
        <ProfileTabs
          user={user}
          boards={boards}
          pins={pins} />
      </div>
    );
  }
}

export default withRouter(Profile);
