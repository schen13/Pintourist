import React from 'react';

const UserInfo = ({ user }) => {
  const profPic = user.photoUrl ? <img src={user.photoUrl} /> : <i className="fas fa-user-circle"></i>;
  return (
    <div className="user-info-container">
      <div className="user-info">
        <h3>
          {user.fname} {user.lname}
        </h3>
      </div>
      <div className="profile-pic">
        {profPic}
      </div>
    </div>
  );
};

export default UserInfo;
