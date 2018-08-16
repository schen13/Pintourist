import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import uiReducer from './ui/ui_reducer';
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
