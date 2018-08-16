import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBoards();
    this.props.fetchAllPinnings();
  }

  render() {
    return (
      <div className="profile-index-container">
        {this.props.openBoardModal}
        {this.props.boards.map(
          board => <BoardIndexItem
            key={board.id}
            board={board}
            user={this.props.user}
          />
        )}
      </div >
    );
  }
}

export default BoardIndex;