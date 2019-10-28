import moment from 'moment';
import {
  TASKS_FETCH_START,
  TASKS_FETCH_SUCCESS,
  TASKS_FETCH_ERROR,
  TASKS_UPDATE_START,
  TASKS_UPDATE_SUCCESS,
  TASKS_UPDATE_ERROR,
  TASKS_SET_SHOWING_TASKS
} from '../types';

const activeDay = moment().isoWeekday();

const initialState = {
  data: [],
  loading: false,
  error: null,
  activeDay
};

export const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASKS_SET_SHOWING_TASKS:
      return { ...state, activeDay: payload.day };
    case TASKS_FETCH_START:
    case TASKS_UPDATE_START:
      return { ...state, loading: true };
    case TASKS_FETCH_SUCCESS:
      return { ...state, data: payload.data, loading: false };
    case TASKS_UPDATE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          totalAmount: payload.totalAmount,
          totalDone: payload.totalDone,
          tasks: state.data.tasks.map(day => ({
            ...day,
            dayTasks: day.dayTasks.map(task => {
              if (task._id === payload.id) {
                return payload.updatedTasks;
              }
              return task;
            })
          }))
        }
      };
    case TASKS_FETCH_ERROR:
    case TASKS_UPDATE_ERROR:
      return { ...state, error: payload.error, loading: false };

    default:
      return state;
  }
};

export default dashboardReducer;
