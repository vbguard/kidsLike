import React from 'react';
import styles from './CurrentDayTitle.module.css';

const CurrentDayTitle = () => (
  <div className={styles.conteiner}>
    <p className={styles.text}>Мої завдання: </p>
    <p className={styles.selectedDay}> Середа, 09.10.2019</p>
  </div>
);

export default CurrentDayTitle;
