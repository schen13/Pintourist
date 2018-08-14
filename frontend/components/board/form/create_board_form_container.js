import { connect } from 'react-redux';
import CreateBoardForm from './create_board_form';
import { createBoard } from '../../../actions/board_actions';
import { closeBoardModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.board,
  formType: 'Create'
});

const mapDispatchToProps = dispatch => ({
  processForm: board => dispatch(createBoard(board)),
  closeBoardModal: () => dispatch(closeBoardModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);
