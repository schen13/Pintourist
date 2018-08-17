import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchAllPinnings();
  }

  render() {
    const { boards, pins, pinnings, user, openBoardModal } = this.props;
    return (
      <div className="profile-index-container">
        {openBoardModal}
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