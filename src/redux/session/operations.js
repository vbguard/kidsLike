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

export const login = credentials => dispatch => {
  dispatch(loginStart());

  api
    .fetchLogin(credentials)
    .then(response => {
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
      dispatch(registerSuccess(response.data));
    })
    .catch(error => {
      dispatch(registerError(error));
    });
};

export const logOut = () => dispatch => {
  api.fetchLogout();

  dispatch(logOutSuccess());
};
