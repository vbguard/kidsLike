import { PLANNING_FETCH_START, PLANNING_FETCH_SUCCESS, PLANNING_FETCH_ERROR } from '../types';

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

export default {
  fetchPlanningTasksStart,
  fetchPlanningTasksSuccess,
  fetchPlanningTasksError
};
