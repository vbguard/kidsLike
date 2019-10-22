import React from 'react';
import { Link } from 'react-router-dom';
import css from './Login.module.css';
import Footer from '../Footer/Footer';

const Login = () => (
  <>
    <div className={css.container}>
      <h2 className={css.title}>Вхід</h2>
      <form className={css.form}>
        <label htmlFor="email" className={css.label}>
          E-mail*
        </label>
        <input className={css.input} id="email" type="text" placeholder="your@email.com" required />
        <label htmlFor="pass" className={css.label}>
          Пароль*
        </label>
        <input className={css.input} id="pass" type="text" placeholder="yourpassword" required />
      </form>
      <Link to="/login" className={css.btn}>
        Вхід
      </Link>
      <Link to="/register" className={css.regText}>
        Не маєш акаунту? Зареєструйся
      </Link>
    </div>
    <Footer />
  </>
);

export default Login;
