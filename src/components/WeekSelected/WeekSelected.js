import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeekSelected.module.css';

const WeekSelected = ({ weekRange }) => (
  <div className={styles.conteiner}>
    <p className={styles.text}>План на тиждень: </p>
    <select className={styles.select}>
      <option>{weekRange}</option>
      <option>14 - 20.10. 2019</option>
    </select>
  </div>
);

WeekSelected.propTypes = {
  weekRange: PropTypes.number
};

export default WeekSelected;
