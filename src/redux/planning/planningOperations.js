import {
  fetchPlanningTasksStart,
  fetchPlanningTasksSuccess,
  fetchPlanningTasksError,
  addTasksStart,
  addTasksSuccess,
  addTasksError
} from './planningActions';
import api from '../../utils/api';

export const fetchTasks = () => dispatch => {
  dispatch(fetchPlanningTasksStart());
  api
    .fetchPlaningTasks()
    .then(response => {
      dispatch(fetchPlanningTasksSuccess(response.data.planningTasks));
    })
    .catch(error => {
      dispatch(fetchPlanningTasksError(error));
    });
};

export const addCustomTask = task => dispatch => {
  dispatch(addTasksStart());
  api
    .fetchCreatePlanningTask(task)
    .then(response => {
      dispatch(addTasksSuccess(response.data.planningTask));
    })
    .catch(error => {
      dispatch(addTasksError(error));
    });
};

export default fetchTasks;
