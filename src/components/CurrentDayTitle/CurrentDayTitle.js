import React from 'react';
import styles from './CurrentDayTitle.module.css';

const CurrentDayTitle = () => (
  <p className={styles.text}>
    Мої завдання: <span className={styles.selectedDay}> Середа, 09.10.</span>
  </p>
);

export default CurrentDayTitle;
