import React from 'react';
import { connect } from 'react-redux';
import BoardIndex from './board_index';
import {
  fetchAllBoards,
  deleteBoard,
  createBoard
} from '../../actions/board_actions';
import { fetchAllPinnings } from '../../actions/pinning_actions';
import { openBoardModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { pinnings, pins }, session }, ownProps) => ({
  boards: ownProps.boards,
  user: ownProps.user,
  pinnings,
  pins,
  currentUserId: session.id
});

const mapDispatchToProps = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  fetchAllPinnings: () => dispatch(fetchAllPinnings()),
  createBoard: board => dispatch(createBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openBoardModal: (
    <div
      className="board-modal-container"
      onClick={() => dispatch(openBoardModal('create'))}
    >
      <div className="board-thumbnail">
        <div className="board-create-icon">
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <div className="board-title-link">Create Board</div>
    </div >
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);