import React from 'react';
import { Link } from 'react-router-dom';
import css from './AuthPage.module.css';
import Footer from '../../components/Footer/Footer';

const AuthPage = () => (
  <>
    <main className={css.container}>
      <h2 className={css.title}>
        Виконуй завдання <br /> - отримай класні призи!
      </h2>
      <Link to="/login" className={css.btn}>
        Вхід
      </Link>
      <Link to="/register" className={css.regText}>
        Реєстрація
      </Link>
    </main>
    <Footer />
  </>
);

export default AuthPage;
