import * as actions from './actions';
import reducer from './reducers';
import * as operations from './operations';

export default {
  sessionActions: actions,
  sessionReducer: reducer,
  sessionOperations: operations,
  login: operations.login,
  register: operations.register
};
