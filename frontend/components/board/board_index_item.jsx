import React from 'react';
import { Link } from 'react-router-dom';
import { selectPinsForBoard } from '../../reducers/selectors';
import LinesEllipsis from 'react-lines-ellipsis';

const BoardIndexItem = ({ board, pins, pinnings, user }) => {
  const titleAsUrl = board.title.replace(/\s+/g, '-').toLowerCase();
  const firstPin = selectPinsForBoard(pinnings, pins, board.id)[0];
  const pinPhoto = firstPin ?
    <div className="board-thumbnail">
      <img src={firstPin.photoUrl} />
    </div> :
    <div className="board-thumbnail"></div>;
  return (
    <Link to={`/${user.username}/${titleAsUrl}`}>
      <div className="board-index-item">
        {pinPhoto}
        <div className="board-title-link">
          <LinesEllipsis
            text={board.title}
          />
        </div>
      </div>
    </Link>
  );
};

export default BoardIndexItem;
