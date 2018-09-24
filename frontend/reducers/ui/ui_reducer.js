import { combineReducers } from 'redux';
import signupModal from './signup_modal_reducer';
import boardModal from './board_modal_reducer';
import pinModal from './pin_modal_reducer';
import pinningModal from './pinning_modal_reducer';
import loadingReducer from './loading_reducer';
import searchReducer from './search_reducer';
import notificationReducer from './notification_reducer';

export default combineReducers({
  signupModal,
  boardModal,
  pinModal,
  pinningModal,
  loading: loadingReducer,
  search: searchReducer,
  notification: notificationReducer
});
