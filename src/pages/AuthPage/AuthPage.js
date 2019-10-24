import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import sessionSelectors from '../../redux/session';
import css from './AuthPage.module.css';
import Footer from '../../components/Footer/Footer';

class AuthPage extends Component {
  componentDidMount() {
    if (!this.props.token) {
      return;
    }

    this.props.history.replace('/dashboard');
  }

  componentDidUpdate() {
    if (!this.props.token) {
      return;
    }

    this.props.history.replace('/dashboard');
  }

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

const mapStateToProps = state => ({
  token: sessionSelectors.getToken(state)
});

AuthPage.propTypes = {
  token: PropTypes.string,
  history: PropTypes.shape
};

export default connect(mapStateToProps)(AuthPage);
