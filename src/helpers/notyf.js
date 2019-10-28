import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 5000,
  types: [
    {
      type: 'error',
      backgroundColor: 'grey',
      message: 'Неправильно введенi даннi. Спробуйте ще раз!'
    }
  ]
});

const createPlanningWeek = () => {
  notyf.success('Створено нові завдання!');
};

const passwordError = () => {
  notyf.error('Неправильно введений пароль. Спробуйте ще раз!');
};

const errorNotyf = status => {
  switch (status) {
    case 200:
      return notyf.success('Ласкаво просимо, насолоджуйтесь додатком!');
    case 201:
      return notyf.success('Реєстрація успішна, насолоджуйтесь додатком!');
    case 400:
    case 501:
      return notyf.error();
    case 401:
    case 403:
      return notyf.error('Необхідно авторизуватись!');
    case 404:
      return notyf.error('Сторінка не знайдена, будьласка спробуйте ще раз!');
    case 500:
    case 503:
      return notyf.error('Проблеми із сервером, будьласка спробуйте пізніше!');
    default:
      break;
  }
};

export default { errorNotyf, passwordError, createPlanningWeek };
