import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  boards: BoardsReducer
});

export default entitiesReducer;
