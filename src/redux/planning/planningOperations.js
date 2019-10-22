import { fetchPlanningTasksStart, fetchPlanningTasksSuccess, fetchPlanningTasksError } from './planningActions';
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

export default fetchTasks;
