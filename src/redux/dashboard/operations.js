import {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  taskUpdateStart,
  taskUpdateSuccess,
  taskUpdateError
} from './actions';
import api from '../../utils/api';

const tasksFetch = () => dispatch => {
  dispatch(taskFetchStart());

  api.fetchTasks().then(response => {
    dispatch(taskFetchSuccess(response.data)).catch(error => {
      dispatch(taskFetchError(error));
    });
  });
};

const tasksUpdate = id => dispatch => {
  dispatch(taskUpdateStart());

  api.fetchUpdateTask(id).then(response => {
    dispatch(taskUpdateSuccess(response.data)).catch(error => {
      dispatch(taskUpdateError(error));
    });
  });
};

export default {
  tasksFetch,
  tasksUpdate
};
