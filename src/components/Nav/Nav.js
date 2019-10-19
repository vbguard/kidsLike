import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'black'
};
const Nav = () => (
  <ul className={styles.nav}>
    <li>
      <NavLink to="/" exact className={styles.navLink} activeStyle={activeStyle}>
        Головна <span className={styles.navLinkSpan}>сторiнка</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/planning" className={styles.navLinkBorders} activeStyle={activeStyle}>
        Планування
      </NavLink>
    </li>
    <li>
      <NavLink to="*" className={styles.navLink} activeStyle={activeStyle}>
        Зворотнiй зв&apos;язок
      </NavLink>
    </li>
  </ul>
);

export default Nav;
