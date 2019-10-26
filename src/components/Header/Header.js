import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import Nav from '../Nav/Nav';
import NavLogin from '../NavLogin/NavLogin';
import styles from './Header.module.css';
import { logOut } from '../../redux/session/operations';

export class Header extends Component {
  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  handleLogOut = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    // const { isLogged } = this.state;
    const { userData } = this.props;
    return (
      <div className={styles.border}>
        <div className={styles.container}>
          {userData !== null ? (
            <>
              <Link to="/dashboard" className={styles.link}>
                KidsLike
                <Icon icon="Logo" className={styles.logoIcon} />
              </Link>
              <Nav />
              <NavLogin />
              <Link to="/" className={styles.logOutLink} onClick={this.handleLogOut}>
                <Icon icon="Exit" className={styles.logOutLinkIcon} />
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className={styles.link}>
                KidsLike
                <Icon icon="Logo" className={styles.logoIcon} />
              </Link>
              <Nav />
            </>
          )}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  userData: PropTypes.object,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  userData: state.session.userData
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
