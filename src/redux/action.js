import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_FETCH_BY_DAY_START,
  TASKS_FETCH_BY_DAY_SUCCESS,
  TASKS_FETCH_BY_DAY_ERROR
} from './types';

export const taskFetchStart = () => ({
  type: TASKS_FETCH_START
});

export const taskFetchSuccess = tasks => ({
  type: TASKS_FETCH_SUCCESS,
  payload: {
    tasks
  }
});

export const taskFetchError = error => ({
  type: TASKS_FETCH_ERROR,
  payload: {
    error
  }
});

export const taskFetchByDayStart = () => ({
  type: TASKS_FETCH_BY_DAY_START
});

export const taskFetchByDaySuccess = day => ({
  type: TASKS_FETCH_BY_DAY_SUCCESS,
  payload: {
    day
  }
});

export const taskFetchByDayError = error => ({
  type: TASKS_FETCH_BY_DAY_ERROR,
  payload: {
    error
  }
});
