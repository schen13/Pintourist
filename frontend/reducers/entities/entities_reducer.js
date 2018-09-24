import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BoardsReducer from './boards_reducer';
import PinsReducer from './pins_reducer';
import PinningsReducer from './pinnings_reducer';
import LoadedPinsReducer from './loaded_pins_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  boards: BoardsReducer,
  pins: PinsReducer,
  pinnings: PinningsReducer,
  loadedPins: LoadedPinsReducer
});

export default entitiesReducer;
