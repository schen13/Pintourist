import React from 'react';

const UserInfo = ({ user }) => (
  <div className="user-info-container">
    <h3>
      {user.fname} {user.lname}
    </h3>
    <br />
    {user.email}
  </div>
);

export default UserInfo;
