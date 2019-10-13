import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './NavLogin.module.css';
import image from '../../assets/images/avatar/avatart.jpg';
import imageSec from '../../assets/images/avatar/avatart@2x.jpg';
import imageThird from '../../assets/images/avatar/avatart@3x.jpg';

const NavLogin = () => (
  <Link to="*" className={styles.user}>
    <span className={styles.container}>
      <img className={styles.img} srcSet={(imageSec, imageThird)} sizes="16px" src={image} alt="avatar" height="16" />
      Ваня
      <Icon icon="Burger" className={styles.burger} />
    </span>
  </Link>
);

export default NavLogin;
