import { connect } from 'react-redux';
import BoardDetail from './board_detail';
import { fetchSingleBoard } from '../../actions/post_actions';

const mapStateToProps = ({ entities: { boards }, boardMapping, ownProps }) => ({
  board: boards[boardMapping[ownProps.match.params.boardTitle]],
});

const mapDispatchToProps = dispatch => ({
  fetchSingleBoard: id => dispatch(fetchSingleBoard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardDetail);
