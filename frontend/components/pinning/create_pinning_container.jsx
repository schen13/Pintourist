import { connect } from 'react-redux';
import CreatePinning from './create_pinning';
import { createPinning } from '../../actions/pinning_actions';
import { closePinningModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities: { boards, pins } }, ownProps) => {
  const splitPath = ownProps.location.pathname.split('/');
  return {
    pin: pins[splitPath[splitPath.length - 1]],
    boards: Object.values(boards)
  };
};

const mapDispatchToProps = dispatch => ({
  createPinning: pinning => dispatch(createPinning(pinning)),
  closePinningModal: () => dispatch(closePinningModal()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreatePinning)
);
