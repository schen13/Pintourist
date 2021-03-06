import React from 'react';
import { connect } from 'react-redux';
import BoardDetail from './board_detail';
import { withRouter } from 'react-router-dom';
import { fetchSingleBoard } from '../../actions/board_actions';
import { fetchAllPins } from '../../actions/pin_actions';
import {
  openBoardModal,
  openPinModal,
  openPinDetailModal
} from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { boards, pins, pinnings, users }, boardMapping }, ownProps) => {
  const board = boards[boardMapping[ownProps.match.params.boardTitle]];
  return {
    board,
    pins,
    pinnings,
    user: users[board.userId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSingleBoard: id => dispatch(fetchSingleBoard(id)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  openPinModal: (
    <div className="create-pin-button" onClick={() => dispatch(openPinModal('create'))}>
      <i className="fas fa-plus"></i>
    </div>
  ),
  openBoardModal: (
    <div
      className="edit-board-modal-container"
      onClick={() => dispatch(openBoardModal('edit'))}
    >
      <i className="fas fa-pencil-alt"></i>
    </div>
  ),
  openPinDetailModal: () => dispatch(openPinDetailModal('show')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardDetail));
