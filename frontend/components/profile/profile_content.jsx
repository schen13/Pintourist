import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
const ProfileContent = props => {
  return (
    <div className="profile-content">
      <BoardIndexContainer boards={props.content} />
    </div>
  );
};

export default ProfileContent;
