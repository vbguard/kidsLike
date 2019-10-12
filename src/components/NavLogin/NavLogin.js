import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLogin.module.css';

const NavLogin = () => (
  <Link to="*">
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className={styles.icon}
    >
      <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
    </svg>
  </Link>
);

export default NavLogin;
