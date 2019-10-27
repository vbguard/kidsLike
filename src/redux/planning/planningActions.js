import {
  PLANNING_FETCH_START,
  PLANNING_FETCH_SUCCESS,
  PLANNING_FETCH_ERROR,
  ADD_TASKS_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR
} from '../types';

export const fetchPlanningTasksStart = () => ({
  type: PLANNING_FETCH_START
});

export const fetchPlanningTasksSuccess = tasks => ({
  type: PLANNING_FETCH_SUCCESS,
  payload: {
    tasks
  }
});

export const fetchPlanningTasksError = error => ({
  type: PLANNING_FETCH_ERROR,
  payload: {
    error
  }
});

export const addTasksSuccess = newTask => ({
  type: ADD_TASKS_SUCCESS,
  payload: {
    ...newTask
  }
});

export const addTasksStart = () => ({
  type: ADD_TASKS_START
});

export const addTasksError = error => ({
  type: ADD_TASKS_ERROR,
  payload: {
    error
  }
});

export default {
  fetchPlanningTasksStart,
  fetchPlanningTasksSuccess,
  fetchPlanningTasksError
};
