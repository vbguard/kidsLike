import React from 'react';
import { Link } from 'react-router-dom';
import css from './Register.module.css';

const Register = () => (
  <div className={css.container}>
    <h2 className={css.title}>
      Реєстрація
      <div className={css.photoContainer}>
        <span className={css.icon}>+</span>
      </div>
    </h2>
    <form className={css.form}>
      <label htmlFor="email" className={css.label}>
        E-mail*
      </label>
      <input className={css.input} id="email" type="text" placeholder="your@email.com" required />

      <label htmlFor="login" className={css.label}>
        Login*
      </label>
      <input className={css.input} id="login" type="text" placeholder="yourlogin" required />

      <label htmlFor="pass" className={css.label}>
        Password (6+ characters)*
      </label>
      <input className={css.input} id="pass" type="text" placeholder="yourpassword" required />

      <label htmlFor="pass2" className={css.label}>
        Password Confirmation*
      </label>
      <input className={css.input} id="pass2" type="text" placeholder="confirmation" required />
    </form>
    <Link to="/register" className={css.btn}>
      Зареєструватися
    </Link>
    <Link to="/login" className={css.regText}>
      Вже з нами? Увійти
    </Link>
  </div>
);

export default Register;
