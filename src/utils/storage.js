export const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return JSON.parse(token);
  }
  return false;
};

export const setToken = data => {
  localStorage.setItem('token', data);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export default { getToken, removeToken, setToken };
