import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import session from '../../redux/session';
import css from './Register.module.css';
import notyf from '../../helpers/notyf';
import Footer from '../Footer/Footer';

class Register extends Component {
  state = { nickname: '', email: '', password: '', passwordConfirmation: '', code: '' };

  submitHandler = e => {
    const { onRegister, history } = this.props;
    e.preventDefault();

    if (this.state.password === this.state.passwordConfirmation && this.state.password.length > 5) {
      onRegister({ ...this.state }, history);
      this.setState({ nickname: '', email: '', password: '', passwordConfirmation: '', code: '' });
    } else {
      notyf.passwordError();
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { nickname, email, password, passwordConfirmation, code } = this.state;
    return (
      <>
        <main className={css.container}>
          <h2 className={css.title}>
            Реєстрація
            <div className={css.photoContainer}>
              <span className={css.icon}>+</span>
            </div>
          </h2>
          <form className={css.form} onSubmit={this.submitHandler}>
            <label htmlFor="email" className={css.label}>
              E-mail (електронна пошта) *
            </label>
            <input
              className={css.input}
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="nickname" className={css.label}>
              Нікнейм *
            </label>
            <input
              className={css.input}
              id="nickname"
              type="text"
              placeholder="Ваш нікнейм"
              value={nickname}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="password" className={css.label}>
              Пароль (6+ символів) *
            </label>
            <input
              className={css.input}
              id="password"
              type="password"
              placeholder="Ваш пароль"
              value={password}
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="passwordConfirmation" className={css.label}>
              Підтвердження пароля *
            </label>
            <input
              className={css.input}
              id="passwordConfirmation"
              type="password"
              placeholder="Ваш пароль"
              value={passwordConfirmation}
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="code" className={css.label}>
              Кодове слово *
            </label>
            <input
              className={css.input}
              id="code"
              type="text"
              placeholder="Кодове слово"
              value={code}
              onChange={this.changeHandler}
              required
            />
            <button type="submit" className={css.btn}>
              Зареєструватися
            </button>
          </form>
          <Link to="/login" className={css.regText}>
            Вже з нами? Увійти
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: (data, history) => dispatch(session.register(data, history))
});

Register.propTypes = {
  onRegister: PropTypes.func,
  history: PropTypes.shape()
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
