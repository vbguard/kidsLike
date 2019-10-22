import * as types from '../types';

const initState = {
  userData: null,
  token: null
};

const sessionReducer = (state = initState, payload) => {
  switch (payload.type) {
    case types.AUTH_FETCH_LOGIN_START:
      return { ...state, user: payload.user, token: payload.token };

    default:
      return state;
  }
};

export default sessionReducer;
