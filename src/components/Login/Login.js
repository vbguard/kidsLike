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
  state = { email: '', password: '', error: '' };

  errorNotyf = error => {
    switch (error.message) {
      case 'Request failed with status code 400':
        return notyf.error();
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
    const { onLogin, history, error } = this.props;
    e.preventDefault();
    onLogin({ ...this.state });
    if (error) {
      this.setState({ error });
    } else {
      setTimeout(() => history.push('/dashboard'), 1000);
      this.setState({ email: '', password: '', error: '' });
      notyf.success('Ласкаво просимо, насолоджуйтесь додатком!');
    }
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <>
        <div className={css.container}>
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
            <button type="submit" className={css.btn}>
              Вхід
            </button>
          </form>
          {error && this.errorNotyf(error)}
          <Link to="/register" className={css.regText}>
            Не маєш акаунту? Зареєструйся
          </Link>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  error: state.session.error
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(session.login(data))
});

Login.propTypes = {
  onLogin: PropTypes.func,
  history: PropTypes.shape(),
  error: PropTypes.shape()
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
