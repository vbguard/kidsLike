const getToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }
  return false;
};

const setToken = data => {
  localStorage.setItem('token', data);
};

const removeToken = () => {
  localStorage.removeItem('token');
};

export default { getToken, removeToken, setToken };
