const getToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  }
  return false;
};

const removeToken = () => {};

const setToken = () => {};

export default { getToken, removeToken, setToken };
