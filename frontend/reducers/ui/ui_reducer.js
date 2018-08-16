import { combineReducers } from 'redux';
import signupModal from './signup_modal_reducer';
import boardModal from './board_modal_reducer';
import pinModal from './pin_modal_reducer';
import pinningModal from './pinning_modal_reducer';

export default combineReducers({
  signupModal,
  boardModal,
  pinModal,
  pinningModal
});
