import { combineReducers } from 'redux';
import * as types from '../types';

// const initState = {
//   user: null,
//   token: null
// };

// const sessionReducer = (state = initState, payload) => {
//   switch (payload.type) {
//     case types.AUTH_FETCH_LOGIN_START:
//       return { ...state, user: payload.user, token: payload.token };

//     default:
//       return state;
//   }
// };

// export default sessionReducer;

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_FETCH_LOGIN_SUCCESS:
    case types.AUTH_FETCH_REGISTER_SUCCESS:
      return payload.response.user;

    case types.AUTH_FETCH_LOGOUT:
      return null;

    default:
      return state;
  }
};

// const authenticated = (state = false, { type, payload }) => {
//   switch (type) {
//     case ActionType.LOGIN_SUCCESS:
//     case ActionType.SIGNUP_SUCCESS:
//     case ActionType.REFRESH_USER_SUCCESS:
//       return true;

//     case ActionType.LOGOUT:
//       return false;

//     default:
//       return state;
//   }
// };

// const token = (state = null, { type, payload }) => {
//   switch (type) {
//     case ActionType.LOGIN_SUCCESS:
//     case ActionType.SIGNUP_SUCCESS:
//       return payload.response.token;

//     case ActionType.LOGOUT:
//       return null;

//     default:
//       return state;
//   }
// };

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.AUTH_FETCH_LOGIN_ERROR:
    case types.AUTH_FETCH_REGISTER_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  error
});
