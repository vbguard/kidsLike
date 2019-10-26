import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_UPDATE_START,
  TASKS_UPDATE_SUCCESS,
  TASKS_UPDATE_ERROR,
  TASKS_SET_SHOWING_TASKS,
  ADD_TASKS_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR
} from '../types';

export const setShowingTasks = day => ({
  type: TASKS_SET_SHOWING_TASKS,
  payload: {
    day
  }
});

export const taskFetchStart = () => ({
  type: TASKS_FETCH_START
});

export const taskFetchSuccess = data => ({
  type: TASKS_FETCH_SUCCESS,
  payload: {
    data
  }
});

export const taskFetchError = error => ({
  type: TASKS_FETCH_ERROR,
  payload: {
    error
  }
});

export const taskUpdateStart = () => ({
  type: TASKS_UPDATE_START
});

export const taskUpdateSuccess = id => ({
  type: TASKS_UPDATE_SUCCESS,
  payload: {
    id
  }
});

export const taskUpdateError = error => ({
  type: TASKS_UPDATE_ERROR,
  payload: {
    error
  }
});

export const addTasksSuccess = newTask => ({
  type: ADD_TASKS_START,
  payload: {
    newTask
  }
});

export const addTasksStart = () => ({
  type: ADD_TASKS_SUCCESS
});

export const addTasksError = error => ({
  type: ADD_TASKS_ERROR,
  payload: {
    error
  }
});
