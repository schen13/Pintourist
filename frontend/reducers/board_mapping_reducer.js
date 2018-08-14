import { RECEIVE_ALL_BOARDS } from '../actions/board_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      let newState = merge({}, state);
      Object.values(action.boards).forEach(board => (
        newState[board.title] = board.id
      ));
      return newState;
    default:
      return state;
  }
};