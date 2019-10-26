import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeekSelected.module.css';

const WeekSelected = ({ currentWeekRange, nextWeekRange, activeDay }) => (
  <div className={styles.conteiner}>
    <p className={styles.text}>План на тиждень: </p>
    <select className={styles.select}>
      <option>{currentWeekRange}</option>
      {activeDay >= 6 && <option>{nextWeekRange}</option>}
    </select>
  </div>
);

WeekSelected.propTypes = {
  currentWeekRange: PropTypes.number,
  nextWeekRange: PropTypes.number,
  activeDay: PropTypes.number
};

export default WeekSelected;
