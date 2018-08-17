import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_SINGLE_BOARD
} from '../actions/board_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      Object.values(action.boards).forEach(board => (
        newState[board.title.replace(/\s+/g, '-').toLowerCase()] = board.id
      ));
      return newState;
    case RECEIVE_SINGLE_BOARD:
      newState[action.board.title.replace(/\s+/g, '-').toLowerCase()] = action.board.id;
      return newState;
    default:
      return state;
  }
};