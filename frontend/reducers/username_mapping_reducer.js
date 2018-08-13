import { RECEIVE_DESIRED_USER } from '../actions/modal_actions';
import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_DESIRED_USER:
      newState[action.desiredUser.username] = action.desiredUser.id;
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.username] = action.currentUser.id;
      return newState;
    default:
      return state;
  }
};