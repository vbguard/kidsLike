import { PLANNING_FETCH_START, PLANNING_FETCH_SUCCESS, PLANNING_FETCH_ERROR } from '../types';

const initialState = {
  data: null,
  loading: false,
  error: null
};

export const planningReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PLANNING_FETCH_START:
      return { ...state, loading: true };
    case PLANNING_FETCH_SUCCESS:
      return { ...state, tasks: payload.tasks, loading: false };
    case PLANNING_FETCH_ERROR:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

export default planningReducer;
