import {
  RECEIVE_ALL_BOARDS,
  RECEIVE_SINGLE_BOARD,
  REMOVE_BOARD
} from '../../actions/board_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOARDS:
      return merge({}, action.boards);
    case RECEIVE_SINGLE_BOARD:
      return merge({}, state, { [action.board.id]: action.board });
    case REMOVE_BOARD:
      let newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};