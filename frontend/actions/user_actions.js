import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_DESIRED_USER = 'RECEIVE_DESIRED_USER';

export const fetchAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchDesiredUser = id => dispatch => (
  UserAPIUtil.fetchDesiredUser(id)
    .then(desiredUser => dispatch(receiveDesiredUser(desiredUser)))
);

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveDesiredUser = desiredUser => ({
  type: RECEIVE_DESIRED_USER,
  desiredUser
});
