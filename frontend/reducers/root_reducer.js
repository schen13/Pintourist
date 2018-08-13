import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import usernameMappingReducer from './username_mapping_reducer';
import boardMappingReducer from './board_mapping_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  usernameMapping: usernameMappingReducer,
  boardMapping: boardMappingReducer
});

export default RootReducer;
