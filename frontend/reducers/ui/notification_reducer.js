import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION } from '../../actions/notification_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return action.message;
    case CLOSE_NOTIFICATION:
      return null;
    default:
      return state;
  }
};
