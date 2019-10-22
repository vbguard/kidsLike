import React from 'react';
import { NavLink } from 'react-router-dom';
import { screenWidth, desctopDays } from '../../utils/var';
// import { findTypeOfContent } from '../../utils/utils';
import styles from './DaysNav.module.css';

const isDesktop = screenWidth >= 1280;

const DaysNav = () => (
  <ul className={styles.nav}>
    {desctopDays.map(navDay => (
      <li className={styles.item} key={navDay.id}>
        <NavLink
          className={styles.link}
          to={`/dashboard/${navDay.pathname}`}
          onClick={() => {
            console.log(navDay.id);
          }}
        >
          {isDesktop ? navDay.largeName : navDay.shortName}
        </NavLink>
      </li>
    ))}

    {/* <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/tuesday">
        {daysContent.tues}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/wednesday">
        {daysContent.wed}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/thursday">
        {daysContent.thurs}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/friday">
        {daysContent.fri}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/sarturday">
        {daysContent.sart}
      </NavLink>
    </li>
    <li className={styles.item}>
      <NavLink className={styles.link} to="/dashboard/sunday">
        {daysContent.sun}
      </NavLink>
    </li> */}
  </ul>
);

export default DaysNav;
