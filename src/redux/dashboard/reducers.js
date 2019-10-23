import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_UPDATE_START,
  TASKS_UPDATE_SUCCESS,
  TASKS_UPDATE_ERROR
} from '../types';

const initialState = {
  data: null,
  showingTasks: null,
  loading: false,
  error: null
};

export const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASKS_FETCH_START:
    case TASKS_UPDATE_START:
      return { ...state, loading: true };
    case TASKS_FETCH_SUCCESS:
      return { ...state, tasks: payload.tasks, loading: false };
    case TASKS_UPDATE_SUCCESS:
      return { ...state.filter(item => item.id === payload.id), loading: false };
    case TASKS_FETCH_ERROR:
    case TASKS_UPDATE_ERROR:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default dashboardReducer;
