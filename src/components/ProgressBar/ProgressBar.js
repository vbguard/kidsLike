import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => (
  <div className={styles.progressConteiner}>
    <p className={styles.text}>
      Балів з початку тиждня: <span className={styles.selectedPoints}>22</span>
      <span className={styles.allPoints}> / 22</span>
    </p>
    <span className={styles.progressRange}></span>
  </div>
);

export default ProgressBar;
