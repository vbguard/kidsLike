import { TASKS_FETCH_START, TASKS_FETCH_SUCCESS, TASKS_FETCH_ERROR, TASKS_UPDATE_TASK } from '../types';

const initialState = {
  tasks: null,
  showingTasks: null,
  loading: false,
  error: null
};

export const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASKS_FETCH_START:
      return { ...state, loading: true };
    case TASKS_FETCH_SUCCESS:
      return { ...state, tasks: payload.tasks, loading: false };
    case TASKS_UPDATE_TASK:
      return state;
    case TASKS_FETCH_ERROR:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default dashboardReducer;
