import React from 'react';
import styles from './WeekSelected.module.css';

const WeekSelected = () => (
  <div className={styles.conteiner}>
    <p className={styles.text}>План на тиждень: </p>
    <select className={styles.select}>
      <option>07 - 13.10. 2019</option>
      <option>14 - 20.10. 2019</option>
    </select>
  </div>
);

export default WeekSelected;
