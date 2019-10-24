import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './AuthPage.module.css';
import Footer from '../../components/Footer/Footer';

class AuthPage extends Component {
  componentDidMount() {}

  render() {
    return (
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
  }
}

export default AuthPage;
