import React from 'react';
import styles from './WeekSelected.module.css';

const WeekSelected = () => (
  <>
    <p className={styles.text}>План на тиждень: </p>
    <input type="date" className={styles.input}></input>
  </>
);

export default WeekSelected;
