import { connect } from 'react-redux';
import EditBoardForm from './edit_board_form';
import { withRouter } from 'react-router-dom';
import { updateBoard, deleteBoard } from '../../../actions/board_actions';
import { closeBoardModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ entities: { boards }, errors, boardMapping }, ownProps) => {
  const splitPath = ownProps.location.pathname.split('/');
  return {
    errors: errors.board,
    board: boards[boardMapping[splitPath[splitPath.length - 1]]],
    userPath: splitPath[splitPath.length - 2]
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: board => dispatch(updateBoard(board)),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  closeBoardModal: () => dispatch(closeBoardModal())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditBoardForm)
);
