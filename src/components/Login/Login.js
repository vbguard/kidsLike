import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Notyf } from 'notyf';
import session from '../../redux/session';
import css from './Login.module.css';
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

class Login extends Component {
  state = { email: '', password: '' };

  submitHandler = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.props.history.push('/dashboard');
    this.setState({ email: '', password: '' });
    notyf.success('Ласкаво просимо, насолоджуйтесь додатком!');
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
            <label htmlFor="password" className={css.label}>
              Пароль*
            </label>
            <input
              className={css.input}
              id="password"
              type="password"
              placeholder="your password"
              value={password}
              onChange={this.changeHandler}
              required
            />
            <button type="submit" className={css.btn}>
              Вхід
            </button>
          </form>
          <Link to="/register" className={css.regText}>
            Не маєш акаунту? Зареєструйся
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(session.login(data))
});

Login.propTypes = {
  onLogin: PropTypes.func,
  history: PropTypes.shape()
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
