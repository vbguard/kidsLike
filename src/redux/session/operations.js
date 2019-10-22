import {
  loginStart,
  loginSuccess,
  loginError,
  registerStart,
  registerSuccess,
  registerError,
  logOutSuccess
} from './actions';
import api from '../../utils/api';

// const setAuthToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = null;
// };

export const login = credentials => dispatch => {
  dispatch(loginStart());

  api
    .fetchLogin(credentials)
    .then(response => {
      // setAuthToken(response.data.token);
      dispatch(loginSuccess(response.data));
    })
    .catch(error => {
      dispatch(loginError(error));
    });
};

export const register = credentials => dispatch => {
  dispatch(registerStart());

  api
    .fetchRegister(credentials)
    .then(response => {
      // setAuthToken(response.data.token);
      dispatch(registerSuccess(response.data));
    })
    .catch(error => {
      dispatch(registerError(error));
    });
};

export const logOut = () => dispatch => {
  api.fetchLogout();
  // clearAuthToken();

  dispatch(logOutSuccess());
};
