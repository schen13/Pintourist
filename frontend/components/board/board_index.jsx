import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchAllPinnings();
  }

  render() {
    const { boards, pins, pinnings, user, currentUserId, openBoardModal } = this.props;
    return (
      <div className="profile-index-container">
        {currentUserId === user.id ? openBoardModal : ''}
        {boards.map(
          board => <BoardIndexItem
            key={board.id}
            board={board}
            pins={pins}
            pinnings={pinnings}
            user={user}
          />
        )}
      </div >
    );
  }
}

export default BoardIndex;