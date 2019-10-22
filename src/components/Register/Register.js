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

  errorNotyf = error => {
    switch (error) {
      case 'Request failed with status code 400':
        return notyf.error('Щось пішло не так, будьласка спробуйте ще раз.');
      case 'Request failed with status code 401':
        return notyf.error('Необхідно авторизуватись.');
      case 'Request failed with status code 403':
        return notyf.error('Необхідно авторизуватись.');
      case 'Request failed with status code 404':
        return notyf.error('Сторінка не знайдена, будьласка спробуйте ще раз.');
      case 'Request failed with status code 500':
        return notyf.error('Проблеми із сервером, будьласка спробуйте пізніше.');
      case 'Request failed with status code 501':
        return notyf.error();
      case 'Request failed with status code 503':
        return notyf.error('Проблеми із сервером, будьласка спробуйте пізніше.');
      default:
        break;
    }
  };

  submitHandler = e => {
    const { onRegister, history, error } = this.props;
    e.preventDefault();
    if (this.state.password === this.state.passwordConfirmation && this.state.password.length > 5) {
      onRegister({ ...this.state });
    } else if (setTimeout(() => error, 1000)) {
      notyf.error();
    } else {
      setTimeout(() => history.push('/planning'), 1000);
      this.setState({ name: '', email: '', password: '' });
      notyf.success(`${this.state.name}, ласкаво просимо, насолоджуйтесь додатком!`);
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;
    const { error } = this.props;
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

            <label htmlFor="name" className={css.label}>
              Nickname*
            </label>
            <input
              className={css.input}
              id="name"
              type="text"
              placeholder="yournickname"
              value={name}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="password" className={css.label}>
              Password (6+ characters)*
            </label>
            <input
              className={css.input}
              id="password"
              type="password"
              placeholder="yourpassword"
              value={password}
              onChange={this.changeHandler}
              required
            />

            <label htmlFor="passwordConfirmation" className={css.label}>
              Password Confirmation*
            </label>
            <input
              className={css.input}
              id="passwordConfirmation"
              type="password"
              placeholder="confirmation"
              value={passwordConfirmation}
              onChange={this.changeHandler}
              required
            />
            <button type="submit" className={css.btn}>
              Зареєструватися
            </button>
          </form>
          {error && this.errorNotyf(error.message)}
          <Link to="/login" className={css.regText}>
            Вже з нами? Увійти
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStatetoProps = state => ({
  error: state.session.error
});

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(session.register(data))
});

Register.propTypes = {
  onRegister: PropTypes.func,
  history: PropTypes.shape(),
  error: PropTypes.shape()
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Register);
