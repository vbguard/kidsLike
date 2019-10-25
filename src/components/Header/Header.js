import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import Nav from '../Nav/Nav';
import NavLogin from '../NavLogin/NavLogin';
import styles from './Header.module.css';

export default class Header extends Component {
  state = {
    isLogged: true
    // userData: this.props.userData
  };

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  handleLogOut = () => this.setState({ isLogged: false });
  // handleLogOut = () => this.setState({ userData: null });

  render() {
    const { isLogged } = this.state;
    // const { userData } = this.state;
    return (
      <div className={styles.border}>
        <div className={styles.container}>
          {isLogged ? (
            <>
              <Link to="/" className={styles.link}>
                KidsLike
                <Icon icon="Logo" className={styles.logoIcon} />
              </Link>
              <Nav />
              <NavLogin />
              <Link to="/" className={styles.logOutLink} onClick={this.handleLogOut}>
                Вихiд
              </Link>
            </>
          ) : (
            <>
              <a href="*" className={styles.link}>
                KidsLike
                <Icon icon="Logo" className={styles.logoIcon} />
              </a>
              <Nav />
            </>
          )}
        </div>
      </div>
    );
  }
}

// Header.propTypes = {
//   userData: PropTypes.string
// };

// const mapStateToProps = state => ({
//   userData: state.session.userData
// });

// export default connect(
//   mapStateToProps,
//   null
// )(Header);
