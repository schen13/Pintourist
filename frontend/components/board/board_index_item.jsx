import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board }) => (
  <div className="board-index-item">
    <Link to={`/:username/${board.title}`}>{board.title}</Link>
  </div>
);

export default BoardIndexItem;
