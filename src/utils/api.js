import axios from 'axios';

axios.defaults.headers.common.Authentication = 'some token';
axios.defaults.headers.get.Accepts = 'application/json';

const baseUrl = 'https://kids-like.goit.co.ua/api/v1';
const config1 = {
  email: 'email@email.com',
  password: 'password'
};

const config2 = {
  email: 'email@email.com',
  password: 'password',
  nickname: 'Testovoy'
};

const config3 = {
  title: 'string',
  description: 'string',
  dates: ['2019-10-21T21:53:25.841Z']
};

const config4 = {
  title: 'string',
  description: 'string',
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  points: 0
};

const endpoints = {
  login: `${baseUrl}/auth/login`,
  register: `${baseUrl}/auth/register`,
  logout: `${baseUrl}/auth/logout`,
  gettasks: `${baseUrl}/tasks`,
  posttasks: `${baseUrl}/tasks`,
  deletetasks: `${baseUrl}/tasks`
};

const login = data => axios.post(endpoints.login, data, config1);
const register = data => axios.post(endpoints.register, data, config2);
const logout = data => axios.post(endpoints.logout, data);
const gettasks = data => axios.get(endpoints.gettasks, data);
const posttasks = data => axios.post(endpoints.posttasks, data, config3);
const deletetasks = data => axios.post(endpoints.deletetasks, data, config4);

export default {
  login,
  register,
  logout,
  gettasks,
  posttasks,
  deletetasks
};
