import React from 'react';
import BoardIndexItem from './board_index_item';
import { openModal } from '../../actions/modal_actions';

class BoardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllBoards();
  }

  render() {
    return (
      <div className="profile-index-container">
        {this.props.openModal}
        {this.props.boards.map(
          board => <BoardIndexItem
            board={board}
            key={board.id}
          />
        )}
      </div >
    );
  }
}

export default BoardIndex;