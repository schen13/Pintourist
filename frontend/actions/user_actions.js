import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_DESIRED_USER = 'RECEIVE_DESIRED_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const REMOVE_USER_ERRORS = 'REMOVE_USER_ERRORS';

export const fetchAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchDesiredUser = id => dispatch => (
  UserAPIUtil.fetchDesiredUser(id)
    .then(desiredUser => dispatch(receiveDesiredUser(desiredUser)))
);

export const updateUser = (user, id) => dispatch => (
  UserAPIUtil.updateUser(user, id).then(
    updatedUser => dispatch(receiveDesiredUser(updatedUser)),
    errors => dispatch(receiveUserErrors(errors.responseJSON)))
);

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveDesiredUser = desiredUser => ({
  type: RECEIVE_DESIRED_USER,
  desiredUser
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const removeUserErrors = () => ({
  type: REMOVE_USER_ERRORS
});
