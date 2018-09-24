import { LOAD_PIN } from '../../actions/pin_actions';
import { merge } from 'lodash';

export default (state = { loadedPins: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOAD_PIN:
      let newState = merge({}, state);
      return { loadedPins: newState.loadedPins.concat(action.loadedPin) };
    default:
      return state;
  }
};