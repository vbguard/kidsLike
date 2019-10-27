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

const tasksUpdate = id => dispatch => {
  dispatch(taskUpdateStart());

  api
    .fetchUpdateTask(id)
    .then(response => {
      console.log('toggle', response);
      dispatch(taskUpdateSuccess(response.data.updatedTask));
    })
    .catch(error => {
      dispatch(taskUpdateError(error));
    });
};

export default {
  tasksFetch,
  tasksUpdate
};
