import { combineReducers } from 'redux';
import sessionReducer from './session/sessionReducer';
import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_FETCH_BY_DAY_START,
  TASKS_FETCH_BY_DAY_SUCCESS,
  TASKS_FETCH_BY_DAY_ERROR
} from './types';

const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TASKS_FETCH_SUCCESS:
      return payload.tasks;
    case TASKS_FETCH_BY_DAY_SUCCESS:
      return state.find(item => item.day === payload.day);
    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case TASKS_FETCH_START:
    case TASKS_FETCH_BY_DAY_START:
      return true;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case TASKS_FETCH_ERROR:
    case TASKS_FETCH_BY_DAY_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  session: sessionReducer,
  tasks: tasksReducer,
  loading: loadingReducer,
  error: errorReducer
});
