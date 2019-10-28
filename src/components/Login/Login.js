import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import session from '../../redux/session';
import css from './Login.module.css';
import Footer from '../Footer/Footer';

class Login extends Component {
  state = { email: '', password: '' };

  submitHandler = e => {
    const { onLogin, history } = this.props;
    e.preventDefault();

    onLogin({ ...this.state }, history);
    this.setState({ email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <main className={css.container}>
          <h2 className={css.title}>Вхід</h2>
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
            <label htmlFor="password" className={css.label}>
              Пароль*
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
            <Link to="/password" className={css.passText}>
              Забули пароль?
            </Link>
            <button type="submit" className={css.btn}>
              Вхід
            </button>
          </form>
          <Link to="/register" className={css.regText}>
            Не маєш акаунту? Зареєструйся
          </Link>
        </main>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (data, history) => dispatch(session.login(data, history))
});

Login.propTypes = {
  onLogin: PropTypes.func,
  history: PropTypes.shape()
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
