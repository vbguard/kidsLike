import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthPage.module.css';

const Login = () => (
  <div className={css.container}>
    <h2 className={css.h2}>Виконуй завдання - отримай класні призи!</h2>
    <Link to="/login" className={css.btn}>
      Вхід
    </Link>
    <Link to="/register" className={css.regText}>
      Реєстрація
    </Link>
  </div>
);

const AuthPage = () => <Login />;

export default AuthPage;
