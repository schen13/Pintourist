import React from 'react';
import ProfileContent from './profile_container';

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0
    };
  }
  render() {
    return (
      <div className="profile-tabs-container">
        <ul className="profile-tabs">
          <h4>Boards</h4>
          <h4>Pins</h4>
        </ul>
        <article className="profile-content-container">
          <ProfileContent />
        </article>
      </div>
    );
  }
}

export default ProfileTabs;
