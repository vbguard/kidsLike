import axios from 'axios';

const baseUrl = 'https://kids-like.goit.co.ua/api/v1';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYjBiMjg2Y2QyNGM4NGYyMzUwNWRkNyIsImlhdCI6MTU3MTg2MTQzNn0.0C2sqbGA6XB_Rd_S2U4PZUELO9oqtYVLReL7t8U6qcA';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const endpoints = {
  login: () => `/auth/login`,
  register: () => `/auth/register`,
  logout: () => `/auth/logout`,
  getTasks: () => `/tasks`,
  getPlanningTasks: () => `/tasks/planning`,
  createTask: () => `/tasks`,
  updateTask: taskId => `/tasks/${taskId}`,
  deleteTask: taskId => `/tasks/${taskId}`
};

const fetchLogin = data => axios.post(endpoints.login(), data);
const fetchRegister = data => axios.post(endpoints.register(), data);
const fetchLogout = () => axios.post(endpoints.logout());
const fetchTasks = () => axios.get(endpoints.getTasks());
const fetchPlaningTasks = () => axios.get(endpoints.getPlanningTasks());
const fetchCreateTask = data => axios.post(endpoints.createTask(), data);
const fetchDeleteTask = taskId => axios.delete(endpoints.deleteTask(taskId));
const fetchUpdateTask = (taskId, data) => axios.put(endpoints.updateTask(taskId), data);

export default {
  fetchLogin,
  fetchRegister,
  fetchLogout,
  fetchTasks,
  fetchPlaningTasks,
  fetchCreateTask,
  fetchDeleteTask,
  fetchUpdateTask
};
