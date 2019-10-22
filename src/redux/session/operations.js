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
import notyf from '../../helpers/notyf';

export const login = credentials => dispatch => {
  dispatch(loginStart());

  api
    .fetchLogin(credentials)
    .then(response => {
      const token = JSON.stringify(response.data.user.token);

      localStorage.setItem('token', token);
      notyf(response.status);
      window.history.pushState('/dashboard', response.data.user);
      dispatch(loginSuccess(response.data.user));
    })
    .catch(error => {
      notyf(error.response.status);
      dispatch(loginError(error));
    });
};

export const register = credentials => dispatch => {
  dispatch(registerStart());

  api
    .fetchRegister(credentials)
    .then(response => {
      const token = JSON.stringify(response.data.user.token);

      localStorage.setItem('token', token);
      notyf(response.status);
      window.history.pushState('/planning', response.data.user);
      dispatch(registerSuccess(response.data.user));
    })
    .catch(error => {
      notyf(error.response.status);
      dispatch(registerError(error));
    });
};

export const logOut = () => dispatch => {
  api.fetchLogout();

  dispatch(logOutSuccess());
};

export default { login, logOut, register };
