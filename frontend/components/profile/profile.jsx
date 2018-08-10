import React from 'react';
import UserInfo from './profile';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDesiredUser(this.props.user.id);
  }

  render() {
    if (!user) return <div>Loading...</div>;
    const { user } = this.props;
    return (
      <div className="profile-container">
        <UserInfo user={user} />
      </div>
    );
  }
}

export default Profile;
