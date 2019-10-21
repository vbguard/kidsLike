import axios from 'axios';

const baseUrl = 'https://kids-like.goit.co.ua/api/v1';

const endpoints = {
  login: `${baseUrl}/auth/login`,
  planning: `${baseUrl}/tasks/planning`
};

const login = data => axios.post(endpoints.login, data);

export default {
  login
};
