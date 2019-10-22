import { TASKS_FETCH_START, TASKS_FETCH_SUCCESS, TASKS_FETCH_ERROR, TASKS_UPDATE_TASK } from '../types';

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

export const updateTask = () => ({
  type: TASKS_UPDATE_TASK
});

export default {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  updateTask
};
