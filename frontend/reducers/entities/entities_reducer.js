import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoardsReducer from './boards_reducer';
import PinsReducer from './pins_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  boards: BoardsReducer,
  pins: PinsReducer
});

export default entitiesReducer;
