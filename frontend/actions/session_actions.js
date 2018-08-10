import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  )
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    error => dispatch(receiveSessionErrors(error.responseJSON))
  )
);

export const logout = () => dispatch =>
  SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const removeSessionErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

