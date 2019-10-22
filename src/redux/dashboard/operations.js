import {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  taskUpdateStart,
  taskUpdateSuccess,
  taskUpdateError
  // setShowingTasks
} from './actions';
// import { getDay } from './selectors';
import api from '../../utils/api';

const tasksFetch = () => dispatch => {
  // const state = getState();
  dispatch(taskFetchStart());

  api
    .fetchTasks()
    .then(response => {
      dispatch(taskFetchSuccess(response.data.result));
      // dispatch(setShowingTasks(getDay(state)));
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
      dispatch(taskUpdateSuccess(response.data.tasks));
    })
    .catch(error => {
      dispatch(taskUpdateError(error));
    });
};

export default {
  tasksFetch,
  tasksUpdate
};
