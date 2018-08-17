import { connect } from 'react-redux';
import CreatePinning from './create_pinning';
import { fetchAllBoards } from '../../actions/board_actions';
import { createPinning } from '../../actions/pinning_actions';
import { closePinningModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities: { boards, pins }, session }, ownProps) => {
  const splitPath = ownProps.location.pathname.split('/');
  const pin = pins[splitPath[splitPath.length - 1]];
  return {
    pin,
    boards,
    session
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllBoards: () => dispatch(fetchAllBoards()),
  createPinning: pinning => dispatch(createPinning(pinning)),
  closePinningModal: () => dispatch(closePinningModal()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePinning)
);
