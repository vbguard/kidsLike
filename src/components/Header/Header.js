import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Icon from '../Icon/Icon';
import NavLogin from '../NavLogin/NavLogin';
import styles from './Header.module.css';

// const x = window.innerWidth;

export default class Header extends Component {
  state = {
    isLogged: true
  };

  toggleModal = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isLogged } = this.state;
    return (
      <div className={styles.border}>
        <div className={styles.container}>
          {isLogged ? (
            <>
              <a href="*" className={styles.link}>
                KidsLike
                <Icon icon="Logo" className={styles.logoIcon} />
              </a>
              <Nav />
              <NavLogin />
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
