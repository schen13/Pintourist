import {
  RECEIVE_ALL_PINNINGS,
  RECEIVE_SINGLE_PINNING,
  REMOVE_PINNING
} from '../../actions/pinning_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PINNINGS:
      return action.pinnings;
    case RECEIVE_SINGLE_PINNING:
      return merge({}, state, { [action.pinning.id]: action.pinning });
    case REMOVE_PINNING:
      let newState = merge({}, state);
      delete newState[action.pinningId];
      return newState;
    default:
      return state;
  }
};