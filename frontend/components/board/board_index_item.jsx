import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board, user }) => {
  const titleAsUrl = board.title.replace(/\s+/g, '-').toLowerCase();
  return (
    <Link to={`/${user.username}/${titleAsUrl}`}>
      <div className="board-index-item">
        <div className="board-thumbnail">
        </div>
        <div className="board-title-link">
          {board.title}
        </div>
      </div>
    </Link>
  );
};

export default BoardIndexItem;
