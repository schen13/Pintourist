import { RECEIVE_ALL_RESULTS, RESET_RESULTS } from "../../actions/search_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RESULTS:
      return action.results;
    case RESET_RESULTS:
      return {};
    default:
      return state;
  }
};