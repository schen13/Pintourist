import React from 'react';
import { connect } from 'react-redux';
import BoardIndex from './board_index';
import {
  fetchAllBoards,
  deleteBoard,
  createBoard
} from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  boards: ownProps.boards
});

const mapDispatchToProps = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  createBoard: board => dispatch(createBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openModal: (
    <div
      className="board-modal-container"
      onClick={() => dispatch(openModal('create'))}
    >
      Create Board
    </div>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);