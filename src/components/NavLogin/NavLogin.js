import React, { Component } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './NavLogin.module.css';
import image from '../../assets/images/avatar/avatart.jpg';
import imageSec from '../../assets/images/avatar/avatart@2x.jpg';
import imageThird from '../../assets/images/avatar/avatart@3x.jpg';

const activeStyle = {
  color: 'black'
};

export default class NavLogin extends Component {
  state = { isOpen: false };

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
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
          Ваня
          <button type="button" onClick={this.toggleModal}>
            <Icon icon="Burger" className={styles.burger} />
          </button>
        </span>

        <Modal isOpen={isOpen} className={styles.menuOpenContainer}>
          <a href="*" className={styles.menuOpenLink}>
            KidsLike
            <Icon icon="Logo" className={styles.menuOpenIcon} />
          </a>
          <ul className>
            <li>
              <NavLink to="/" exact className={styles.menuOpenNavLink} activeStyle={activeStyle}>
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="*" className={styles.menuOpenNavLink} activeStyle={activeStyle}>
                Планування
              </NavLink>
            </li>
            <li>
              <NavLink to="*" className={styles.menuOpenNavLink} activeStyle={activeStyle}>
                Зворотнiй зв&apos;язок
              </NavLink>
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
