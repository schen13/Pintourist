import { OPEN_PIN_MODAL, CLOSE_PIN_MODAL } from '../../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_PIN_MODAL:
      return action.modal;
    case CLOSE_PIN_MODAL:
      return null;
    default:
      return state;
  }
};
