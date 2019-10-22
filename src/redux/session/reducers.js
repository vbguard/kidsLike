import * as types from '../types';

const sessionReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_FETCH_LOGIN_SUCCESS:
    case types.AUTH_FETCH_REGISTER_SUCCESS:
      return payload.response.user;

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
