import React from 'react';
import CreateBoardFormContainer from '../board/form/create_board_form_container';
import EditBoardFormContainer from '../board/form/edit_board_form_container';
import { connect } from 'react-redux';

const BoardModal = ({ boardModal, closeBoardModal }) => {
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
    <div className="board-modal-background" onClick={closeBoardModal}>
      <div className="board-modal-child" onClick={e => e.stopPropagation()} >
        {component}
      </div>
    </div>
  );
};

import { closeBoardModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  boardModal: state.ui.boardModal
});

const mapDispatchToProps = dispatch => ({
  closeBoardModal: () => dispatch(closeBoardModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (BoardModal);