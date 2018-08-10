import * as UserAPIUtil from '../util/user_util';

export const RECEIVE_DESIRED_USER = 'RECEIVE_DESIRED_USER';

export const fetchDesiredUser = id => dispatch =>
  UserAPIUtil.fetchDesiredUser(id).then(desiredUser =>
    dispatch(receiveDesiredUser(desiredUser))
  );

const receiveDesiredUser = desiredUser => ({
  type: RECEIVE_DESIRED_USER,
  desiredUser
});
