import { OPEN_BOARD_MODAL, CLOSE_BOARD_MODAL } from '../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_BOARD_MODAL:
      return action.modal;
    case CLOSE_BOARD_MODAL:
      return null;
    default:
      return state;
  }
};
