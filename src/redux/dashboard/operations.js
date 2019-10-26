import {
  taskFetchStart,
  taskFetchSuccess,
  taskFetchError,
  taskUpdateStart,
  taskUpdateSuccess,
  taskUpdateError,
  setShowingTasks,
  addTasksStart,
  addTasksSuccess,
  addTasksError
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

const taskAdd = task => dispatch => {
  dispatch(addTasksStart());

  api
    .fetchCreateTask(task)
    .then(response => {
      dispatch(addTasksSuccess(response.data));
    })
    .catch(error => {
      dispatch(addTasksError(error));
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
  taskAdd,
  tasksUpdate
};
