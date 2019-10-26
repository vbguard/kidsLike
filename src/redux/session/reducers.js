import * as types from '../types';

const initialState = {
  userData: null,
  token: null,
  loading: false,
  error: null
};

const sessionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.AUTH_FETCH_LOGIN_START:
      return { ...state, loading: true };
    case types.AUTH_FETCH_REGISTER_START:
      return { ...state, loading: true };
    case types.AUTH_FETCH_LOGIN_SUCCESS:
      return { ...state, ...payload.data, loading: false };
    case types.AUTH_FETCH_REGISTER_SUCCESS:
      return { ...state, ...payload.data, loading: false };
    case types.AUTH_FETCH_LOGIN_ERROR:
      return { ...state, error: payload.error, loading: false };
    case types.AUTH_FETCH_REGISTER_ERROR:
      return { ...state, error: payload.error, loading: false };
    case types.AUTH_INIT_USER:
      return { ...state, ...payload };
    case types.AUTH_FETCH_LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default sessionReducer;
