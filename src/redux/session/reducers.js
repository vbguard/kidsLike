import * as types from '../types';

const initalState = {
  userData: null,
  token: null,
  loading: false,
  error: null
};

const sessionReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.AUTH_FETCH_LOGIN_START:
      return { ...state, loading: true };
    case types.AUTH_FETCH_LOGIN_SUCCESS:
    case types.AUTH_FETCH_REGISTER_SUCCESS:
      return { ...state, ...payload.data, loading: true };
    case types.AUTH_FETCH_LOGIN_ERROR:
    case types.AUTH_FETCH_REGISTER_ERROR:
      return payload.error;

    case types.AUTH_FETCH_LOGOUT:
      return null;

    default:
      return state;
  }
};

export default sessionReducer;
