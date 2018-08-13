import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board }) => (
  <Link to={`/:username/${board.title}`}>
    <div className="board-index-item">
      <div className="board-thumbnail">
      </div>
      <div className="board-title-link">
        {board.title}
      </div>
    </div>
  </Link>
);

export default BoardIndexItem;
