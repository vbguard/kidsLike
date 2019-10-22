import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as sessionOperations from '../../redux/session';
import css from './Login.module.css';
import Footer from '../Footer/Footer';

class Login extends Component {
  state = { email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className={css.container}>
          <h2 className={css.title}>Вхід</h2>
          <form className={css.form} onSubmit={this.submitHandler}>
            <label htmlFor="email" className={css.label}>
              E-mail*
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
            <label htmlFor="pass" className={css.label}>
              Пароль*
            </label>
            <input
              className={css.input}
              id="pass"
              type="password"
              placeholder="yourpassword"
              value={password}
              onChange={this.changeHandler}
              required
            />
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
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login
};

Login.propTypes = {
  onLogin: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
