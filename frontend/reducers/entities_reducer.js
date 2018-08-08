import UsersReducer from './users_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  users: UsersReducer
});

export default entitiesReducer;
