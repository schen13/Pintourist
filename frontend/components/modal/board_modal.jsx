import React from 'react';
import CreateBoardFormContainer from '../board/form/create_board_form_container';
import EditBoardFormContainer from '../board/form/edit_board_form_container';
import { connect } from 'react-redux';

const BoardModal = ({ boardModal, closeModal }) => {
  if (!boardModal) return null;
  let component;
  switch (boardModal) {
    case 'create':
      component = <CreateBoardFormContainer />;
      break;
    case 'edit':
      component = <EditBoardFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="board-modal-background" onClick={closeModal}>
      <div className="board-modal-child" onClick={e => e.stopPropagation()} >
        {component}
      </div>
    </div>
  );
};

import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  boardModal: state.ui.boardModal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (BoardModal);