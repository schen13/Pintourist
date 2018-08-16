import { connect } from 'react-redux';
import EditPinModal from './edit_pin_form';
import { updatePin, removePinErrors } from '../../../actions/pin_actions';
import { closePinModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities: { pins }, errors }, ownProps) => {
  const splitPath = ownProps.location.pathname.split('/');
  return {
    errors: errors.pin,
    pin: pins[splitPath[splitPath.length - 1]]
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: pin => dispatch(updatePin(pin)),
  closePinModal: () => dispatch(closePinModal()),
  clearErrors: () => dispatch(removePinErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPinModal)
);
