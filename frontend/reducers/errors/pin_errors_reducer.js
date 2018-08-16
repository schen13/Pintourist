import {
  RECEIVE_PIN_ERRORS, REMOVE_PIN_ERRORS
} from '../../actions/pin_actions';
import { CLOSE_PIN_MODAL } from '../../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    case REMOVE_PIN_ERRORS:
    case CLOSE_PIN_MODAL:
      return [];
    default:
      return state;
  }
};