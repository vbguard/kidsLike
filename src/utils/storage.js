// Тут написати функцію яка буде перевіряти на наявність токену у локал стореджі
//! І обов'язково повина щось вертати або сам токен або null

//// Необходимо проверить на работоспособность /////

const isToken = () => {
  const token = localStorage.getItem('token');

  if (token !== null) {
    return Json.parse(token);
  }
  return null;
};
