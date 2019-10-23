import * as actions from './actions';
import reducers from './reducers';
import * as selectors from './selectors';
import operations from './operations';

export default {
  dashboardActions: actions,
  dashboardReducer: reducers,
  dashboardSelectors: selectors,
  ...operations
};
