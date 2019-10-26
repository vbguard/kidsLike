import React, { Component } from 'react';
import Modal from 'react-modal';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../Icon/Icon';
import styles from './NavLogin.module.css';
import image from '../../assets/images/avatar/avatart.jpg';
import imageSec from '../../assets/images/avatar/avatart@2x.jpg';
import imageThird from '../../assets/images/avatar/avatart@3x.jpg';
import { logOut } from '../../redux/session/operations';

const activeStyle = {
  color: 'black'
};

export class NavLogin extends Component {
  state = { isOpen: false };

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    const { nickname, logout } = this.props;
    return (
      <div className={styles.user}>
        <span className={styles.container}>
          <img
            className={styles.img}
            srcSet={(imageSec, imageThird)}
            sizes="16px"
            src={image}
            alt="avatar"
            height="16"
          />
          {nickname}
          <button type="button" onClick={this.toggleModal} className={styles.btn}>
            <Icon icon="Burger" className={styles.burger} />
          </button>
        </span>

        <Modal isOpen={isOpen} className={styles.menuOpenContainer}>
          <Link to="/dashboard" className={styles.menuOpenLink} onClick={this.toggleModal}>
            KidsLike
            <Icon icon="Logo" className={styles.menuOpenIcon} />
          </Link>
          <ul>
            <li>
              <NavLink
                exact
                to="/dashboard"
                className={styles.menuOpenNavLink}
                onClick={this.toggleModal}
                activeStyle={activeStyle}
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/planning"
                className={styles.menuOpenNavLink}
                onClick={this.toggleModal}
                activeStyle={activeStyle}
              >
                Планування
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={styles.menuOpenNavLink}
                onClick={this.toggleModal}
                activeStyle={activeStyle}
              >
                Зворотнiй зв&apos;язок
              </NavLink>
            </li>
            <li>
              <Link to="/" className={styles.MenuLogOutLink} onClick={logout}>
                Вихiд
              </Link>
            </li>
          </ul>
          <button type="button" onClick={this.toggleModal} className={styles.menuOpenBtn}>
            <Icon icon="Close" className={styles.menuCloseIcon} />
          </button>
        </Modal>
      </div>
    );
  }
}

NavLogin.propTypes = {
  nickname: PropTypes.string,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  nickname: state.session.userData.nickname
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLogin);

Modal.setAppElement('body');
