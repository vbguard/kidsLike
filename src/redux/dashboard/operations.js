import {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  taskUpdateStart,
  taskUpdateSuccess,
  taskUpdateError,
  setShowingTasks
} from './actions';
// import selectors from './selectors';
import api from '../../utils/api';

const tasksFetch = () => (dispatch, getState) => {
  dispatch(taskFetchStart());

  api
    .fetchTasks()
    .then(response => {
      dispatch(taskFetchSuccess(response.data));
      const state = getState();
      dispatch(setShowingTasks(state.dashboard.activeDay));
    })
    .catch(error => {
      dispatch(taskFetchError(error));
    });
};

export const tasksUpdate = (id, data) => dispatch => {
  dispatch(taskUpdateStart());

  api
    .fetchUpdateTask(id, data)
    .then(response => {
      dispatch(taskUpdateSuccess(id, { ...response.data }));
    })
    .catch(error => {
      dispatch(taskUpdateError(error));
    });
};

export default {
  tasksFetch,
  tasksUpdate
};
