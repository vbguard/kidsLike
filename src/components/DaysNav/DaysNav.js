import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { screenWidth, daysOfWeek } from '../../utils/var';
import styles from './DaysNav.module.css';

const isDesktop = screenWidth >= 1280;

const DaysNav = ({ handleClick }) => (
  <ul className={styles.nav}>
    {daysOfWeek.map(navDay => (
      <li className={styles.item} key={navDay.id}>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`/dashboard/${navDay.pathname}`}
          onClick={handleClick(navDay.id)}
        >
          {isDesktop ? navDay.largeName : navDay.shortName}
        </NavLink>
      </li>
    ))}
  </ul>
);

DaysNav.propTypes = {
  handleClick: PropTypes.func
};

// const mapStateToProps = (state = {});

export default connect()(DaysNav);
