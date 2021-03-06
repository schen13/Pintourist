import {
  RECEIVE_ALL_PINS,
  RECEIVE_SINGLE_PIN,
  REMOVE_PIN
} from '../../actions/pin_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return merge({}, action.pins);
    case RECEIVE_SINGLE_PIN:
      return merge({}, state, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      let newState = merge({}, state);
      delete newState[action.pinId];
      return newState;
    default:
      return state;
  }
};