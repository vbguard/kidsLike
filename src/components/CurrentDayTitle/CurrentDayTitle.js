import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentDayTitle.module.css';

const CurrentDayTitle = ({ dayTitle }) => (
  <div className={styles.conteiner}>
    <p className={styles.text}>Мої завдання: </p>
    <p className={styles.selectedDay}>{dayTitle}</p>
  </div>
);

CurrentDayTitle.propTypes = {
  dayTitle: PropTypes.string
};

export default CurrentDayTitle;
