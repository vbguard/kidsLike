import { combineReducers } from 'redux';
import sessionReducer from './session/sessionReducer';
import dashboardReducer from './dashboard';

export default combineReducers({
  session: sessionReducer,
  dashboard: dashboardReducer
});
