import {
  OPEN_PIN_DETAIL_MODAL,
  CLOSE_PIN_DETAIL_MODAL
} from '../../actions/modal_actions';

export default (state = null, action) => {
  switch (action.type) {
    case OPEN_PIN_DETAIL_MODAL:
      return action.modal;
    case CLOSE_PIN_DETAIL_MODAL:
      return null;
    default:
      return state;
  }
};