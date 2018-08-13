import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const REMOVE_BOARD_ERRORS = 'REMOVE_BOARD_ERRORS';

export const fetchAllBoards = () => dispatch => (
  BoardAPIUtil.fetchAllBoards().then(
    res => dispatch(receiveAllBoards(res)))
);

export const fetchSingleBoard = id => dispatch => (
  BoardAPIUtil.fetchSingleBoard(id).then(
    res => dispatch(receiveSingleBoard(res)))
);

export const createBoard = board => dispatch => (
  BoardAPIUtil.createBoard(board).then(
    res => dispatch(receiveSingleBoard(res)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
);

export const updateBoard = board => dispatch => (
  BoardAPIUtil.updateBoard(board).then(
    res => dispatch(receiveSingleBoard(res)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
);

export const deleteBoard = boardId => dispatch => (
  BoardAPIUtil.deleteBoard(boardId).then(
    res => dispatch(removeBoard(res.id)),
    errors => dispatch(receiveBoardErrors(errors.responseJSON)))
);

const receiveAllBoards = boards => ({
  type: RECEIVE_ALL_BOARDS,
  boards
});

const receiveSingleBoard = board => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const removeBoardErrors = () => ({
  type: REMOVE_BOARD_ERRORS
});