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
import { setToken, getToken, removeToken } from '../../utils/storage';

export const login = (credentials, history) => dispatch => {
  dispatch(loginStart());
  api
    .fetchLogin(credentials)
    .then(response => {
      const token = JSON.stringify(response.data.user.token);
      setToken(token);
      notyf.errorNotyf(response.status);
      history.push('/dashboard');
      dispatch(loginSuccess(response.data.user));
    })
    .catch(error => {
      notyf.errorNotyf(error.response.status);
      dispatch(loginError(error));
    });
};

export const register = (credentials, history) => dispatch => {
  dispatch(registerStart());
  api
    .fetchRegister(credentials)
    .then(response => {
      const token = JSON.stringify(response.data.user.token);

      setToken(token);
      notyf.errorNotyf(response.status);
      history.push('/planning');
      dispatch(registerSuccess({ ...response.data.user }));
    })
    .catch(error => {
      notyf.errorNotyf(error.response.status);
      dispatch(registerError(error));
    });
};

export const logOut = () => dispatch => {
  api
    .fetchLogout()
    .then(res => {
      if (res.status === 200) {
        removeToken();
        dispatch(logOutSuccess());
      }
    })
    .catch(error => {
      notyf.errorNotyf(error.response.status);
      dispatch(registerError(error));
    });
};

export const initUser = history => dispatch => {
  dispatch(loginStart());
  if (getToken()) {
    api
      .fetchUser(getToken())
      .then(response => {
        const token = JSON.stringify(response.data.token);

        setToken(token);
        notyf.errorNotyf(response.status);
        history.push('/dashboard');
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        notyf.errorNotyf(error.response.status);
        dispatch(loginError(error));
      });
  }
};

export default { login, logOut, register };
