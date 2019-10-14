import React from 'react';
import styles from './CurrentDayTitle.module.css';

const CurrentDayTitle = () => (
  <p className={styles.text}>
    Мої завдання: <span className={styles.selectedDay}></span>
  </p>
);

export default CurrentDayTitle;
