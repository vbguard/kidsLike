import { combineReducers } from 'redux';
import session from './session';
import dashboard from './dashboard';
import planningReducer from './planning/planningReducers';

export default combineReducers({
  session: session.sessionReducer,
  dashboard: dashboard.dashboardReducer,
  planning: planningReducer
});
