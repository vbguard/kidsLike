import axios from 'axios';
import { getToken } from './storage';

const baseUrl = 'https://kids-like.goit.co.ua/api/v1';
// const baseUrl = 'http://localhost:5000/api/v1';

const token = getToken();

axios.defaults.baseURL = baseUrl;

if (token) {
  axios.defaults.headers.common.Authorization = token || '';
}

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const setToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const endpoints = {
  me: () => `/auth/me`,
  login: () => `/auth/login`,
  register: () => `/auth/register`,
  logout: () => `/auth/logout`,
  getTasks: () => `/tasks`,
  getPlanningTasks: () => `/tasks/planning`,
  createPlanningTasks: () => `/tasks/planning`,
  createTask: () => `/tasks`,
  updateTask: taskId => `/tasks/${taskId}`,
  deleteTask: taskId => `/tasks/${taskId}`,
  createPlanningWeek: () => `/tasks/planning/week`
};

const fetchUser = token => {
  setToken(token);
  return axios.get(endpoints.me());
};
const fetchLogin = data => axios.post(endpoints.login(), data);
const fetchRegister = data => axios.post(endpoints.register(), data);
const fetchLogout = () => axios.post(endpoints.logout());
const fetchTasks = () => axios.get(endpoints.getTasks());
const fetchPlaningTasks = () => axios.get(endpoints.getPlanningTasks());
const fetchCreatePlanningTask = data => axios.post(endpoints.createPlanningTasks(), data);
const fetchCreateTask = data => axios.post(endpoints.createTask(), data);
const fetchDeleteTask = taskId => axios.delete(endpoints.deleteTask(taskId));
const fetchUpdateTask = (taskId, data) => axios.patch(endpoints.updateTask(taskId), data);
const fetchCreatePlanningWeek = data => axios.post(endpoints.createPlanningWeek(), data);

export default {
  fetchCreatePlanningWeek,
  fetchUser,
  fetchLogin,
  fetchRegister,
  fetchLogout,
  fetchTasks,
  fetchPlaningTasks,
  fetchCreatePlanningTask,
  fetchCreateTask,
  fetchDeleteTask,
  fetchUpdateTask
};
