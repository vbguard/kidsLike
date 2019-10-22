import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Notyf } from 'notyf';
import session from '../../redux/session';
import css from './Register.module.css';
import 'notyf/notyf.min.css';
import Footer from '../Footer/Footer';

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

class Register extends Component {
  state = { name: '', email: '', password: '', passwordConfirmation: '' };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.password === this.state.passwordConfirmation && this.state.password.length > 5) {
      this.props.onRegister({ ...this.state });
      setTimeout(() => this.props.history.push('/planning'), 1000);
      this.setState({ name: '', email: '', password: '' });
      notyf.success(`${this.state.name}, ласкаво просимо, насолоджуйтесь додатком!`);
    } else {
      notyf.error();
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;
    return (
      <>
        <div className={css.container}>
          <h2 className={css.title}>
            Реєстрація
            <div className={css.photoContainer}>
              <span className={css.icon}>+</span>
            </div>
          </h2>
          <form className={css.form} onSubmit={this.submitHandler}>
            <label htmlFor="email" className={css.label}>
              E-mail (електронна пошта)*
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

            <label htmlFor="name" className={css.label}>
              Нікнейм*
            </label>
            <input
              className={css.input}
              id="name"
              type="text"
              placeholder="Ваш нікнейм"
              value={name}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="password" className={css.label}>
              Пароль (6+ символів)*
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
              Підтвердження пароля*
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
            <button type="submit" className={css.btn}>
              Зареєструватися
            </button>
          </form>
          <Link to="/login" className={css.regText}>
            Вже з нами? Увійти
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(session.register(data))
});

Register.propTypes = {
  onRegister: PropTypes.func,
  history: PropTypes.shape()
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
