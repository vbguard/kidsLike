import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionOperations from '../../redux/session';
import css from './Register.module.css';
import Footer from '../Footer/Footer';

class Register extends Component {
  state = { name: '', email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, password } = this.state;
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

            <label htmlFor="login" className={css.label}>
              Login*
            </label>
            <input
              className={css.input}
              id="login"
              type="text"
              placeholder="yourlogin"
              value={name}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="pass" className={css.label}>
              Password (6+ characters)*
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

            <label htmlFor="pass2" className={css.label}>
              Password Confirmation*
            </label>
            <input className={css.input} id="pass2" type="password" placeholder="confirmation" required />
          </form>
          <Link to="/register" className={css.btn}>
            Зареєструватися
          </Link>
          <Link to="/login" className={css.regText}>
            Вже з нами? Увійти
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: sessionOperations.signup
};

Register.propTypes = {
  onRegister: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Register);
