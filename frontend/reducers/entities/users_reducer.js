import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_DESIRED_USER, RECEIVE_ALL_USERS } from "../../actions/user_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_DESIRED_USER:
      return merge({}, state, {
        [action.desiredUser.id]: action.desiredUser
      });
    default:
      return state;
  }
};
