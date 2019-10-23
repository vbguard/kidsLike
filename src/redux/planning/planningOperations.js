import axios from 'axios';
import { fetchPlanningTasksStart, fetchPlanningTasksSuccess, fetchPlanningTasksError } from './planningActions';
// import * as api from '../../utils/api';

export const fetchTasks = () => dispatch => {
  dispatch(fetchPlanningTasksStart());

  //   api
  //     .fetchPlaningTasks()
  axios
    .get('https://kids-like.goit.co.ua/api/v1/planning')
    .then(response => {
      dispatch(fetchPlanningTasksSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPlanningTasksError(error));
    });
};

export default fetchTasks;
