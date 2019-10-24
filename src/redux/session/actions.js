import {
  AUTH_FETCH_LOGIN_START,
  AUTH_FETCH_LOGIN_SUCCESS,
  AUTH_FETCH_LOGIN_ERROR,
  AUTH_FETCH_REGISTER_START,
  AUTH_FETCH_REGISTER_SUCCESS,
  AUTH_FETCH_REGISTER_ERROR,
  AUTH_FETCH_LOGOUT
} from '../types';

/*
 * Login
 */
export const loginStart = () => ({
  type: AUTH_FETCH_LOGIN_START
});

export const loginSuccess = data => ({
  type: AUTH_FETCH_LOGIN_SUCCESS,
  payload: { data }
});

export const loginError = error => ({
  type: AUTH_FETCH_LOGIN_ERROR,
  payload: { error }
});

/*
 * Register
 */
export const registerStart = () => ({
  type: AUTH_FETCH_REGISTER_START
});

export const registerSuccess = response => ({
  type: AUTH_FETCH_REGISTER_SUCCESS,
  payload: { response }
});

export const registerError = error => ({
  type: AUTH_FETCH_REGISTER_ERROR,
  payload: { error }
});

/*
 * Logout
 */
export const logOutSuccess = () => ({
  type: AUTH_FETCH_LOGOUT
});
