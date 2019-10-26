import {
  PLANNING_FETCH_START,
  PLANNING_FETCH_SUCCESS,
  PLANNING_FETCH_ERROR,
  ADD_TASKS_START,
  ADD_TASKS_SUCCESS,
  ADD_TASKS_ERROR
} from '../types';

const initialState = {
  tasks: null,
  loading: false,
  error: null
};

export const planningReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLANNING_FETCH_START:
    case ADD_TASKS_START:
      return { ...state, loading: true };
    case PLANNING_FETCH_SUCCESS:
      return { ...state, tasks: payload.tasks, loading: false };
    case ADD_TASKS_SUCCESS:
      console.log('payload', payload);
      return { ...state, tasks: [...state.tasks, payload] };
    case ADD_TASKS_ERROR:
    case PLANNING_FETCH_ERROR:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default planningReducer;
