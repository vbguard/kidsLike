import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = () => (
  <div className={styles.conteiner}>
    <div className={styles.progressConteiner}>
      <p className={styles.text}>Балів з початку тиждня:</p>
      <span className={styles.selectedPoints}>6</span>
      <span className={styles.allPoints}> / 22</span>
      <progress max="22" value="6" className={styles.progressRange}></progress>
    </div>
  </div>
);

export default ProgressBar;
