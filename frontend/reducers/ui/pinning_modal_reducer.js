import { OPEN_PINNING_MODAL, CLOSE_PINNING_MODAL } from '../../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_PINNING_MODAL:
      return action.modal;
    case CLOSE_PINNING_MODAL:
      return null;
    default:
      return state;
  }
};
