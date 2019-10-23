import React from 'react';
import { NavLink } from 'react-router-dom';
import { screenWidth, daysOfWeek } from '../../utils/var';
import styles from './DaysNav.module.css';

const isDesktop = screenWidth >= 1280;

const DaysNav = () => (
  <ul className={styles.nav}>
    {daysOfWeek.map(navDay => (
      <li className={styles.item} key={navDay.id}>
        <NavLink className={styles.link} to={`/dashboard/${navDay.pathname}`} onClick={() => {}}>
          {isDesktop ? navDay.largeName : navDay.shortName}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default DaysNav;
