import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

import css from './AuthPage.module.css';

const AuthPage = () => (
  <>
    <div className={css.container}>
      <h2 className={css.title}>Виконуй завдання - отримай класні призи!</h2>
      <Link to="/login" className={css.btn}>
        Вхід
      </Link>
      <Link to="/register" className={css.regText}>
        Реєстрація
      </Link>
    </div>
    <Footer />
  </>
);

export default AuthPage;
