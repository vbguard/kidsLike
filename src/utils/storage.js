const getToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    return Json.parse(token);
  }
  return false;
};

export default getToken
