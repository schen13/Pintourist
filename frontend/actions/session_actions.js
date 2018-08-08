import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const signup = user => dispatch =>
  SessionAPIUtil.signup(user).then(res => dispatch(receiveCurrentUser(res)));

export const login = user => dispatch =>
  SessionAPIUtil.login(user).then(res => dispatch(receiveCurrentUser(res)));

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});
