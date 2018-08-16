import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <h3>
          {user.fname} {user.lname}
        </h3>
      </div>
      <div className="profile-pic">
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default UserInfo;
