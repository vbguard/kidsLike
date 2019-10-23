import { combineReducers } from 'redux';
import sessionReducer from './session/sessionReducer';
import dashboardReducer from './dashboard';
import planningReducer from './planning/planningReducers';

export default combineReducers({
  session: sessionReducer,
  dashboard: dashboardReducer,
  planning: planningReducer
});
