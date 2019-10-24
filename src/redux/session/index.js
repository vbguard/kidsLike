import * as actions from './actions';
import reducer from './reducers';
import selectors from './selectors';
import * as operations from './operations';

console.log('operations', operations);
export default {
  sessionActions: actions,
  sessionReducer: reducer,
  sessionSelectors: selectors,
  sessionOperations: operations,
  login: operations.login
};
