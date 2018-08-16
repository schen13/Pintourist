import { connect } from 'react-redux';
import CreatePinModal from './create_pin_form';
import { createPin, removePinErrors } from '../../../actions/pin_actions';
import { closePinModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.pin
});

const mapDispatchToProps = dispatch => ({
  processForm: pin => dispatch(createPin(pin)),
  closePinModal: () => dispatch(closePinModal()),
  clearErrors: () => dispatch(removePinErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinModal);
