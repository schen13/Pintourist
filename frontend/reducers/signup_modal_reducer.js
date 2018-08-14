import { OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL } from '../actions/modal_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_SIGNUP_MODAL:
      return action.modal;
    case CLOSE_SIGNUP_MODAL:
      return null;
    case LOGOUT_CURRENT_USER:
      return 'signup';
    default:
      return state;
  }
};
