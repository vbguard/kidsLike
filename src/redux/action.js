import { TASKS_FETCH_START, TASKS_FETCH_SUCCESS, TASKS_FETCH_ERROR } from './types';

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
