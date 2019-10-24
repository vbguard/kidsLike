import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { screenWidth, daysOfWeek } from '../../utils/var';
import { setShowingTasks } from '../../redux/dashboard/actions';
import styles from './DaysNav.module.css';

const isDesktop = screenWidth >= 1280;

const DaysNav = ({ onClick }) => (
  <ul className={styles.nav}>
    {daysOfWeek.map(navDay => (
      <li className={styles.item} key={navDay.id}>
        <NavLink
          className={styles.link}
          activeClassName={styles.activeLink}
          to={`/dashboard/${navDay.pathname}`}
          onClick={() => onClick(navDay.id)}
        >
          {isDesktop ? navDay.largeName : navDay.shortName}
        </NavLink>
      </li>
    ))}
  </ul>
);

DaysNav.propTypes = {
  onClick: PropTypes.func
};

const mapStateToProps = state => ({
  currentDay: state.dashboard.activeDay
});

const mapDispatchToProps = dispatch => ({
  onClick: day => dispatch(setShowingTasks(day))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysNav);
