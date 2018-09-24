import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './user_errors_reducer';
import boardErrorsReducer from './board_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer,
  board: boardErrorsReducer,
  pin: pinErrorsReducer
});

export default errorsReducer;
