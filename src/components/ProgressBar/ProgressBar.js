import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentPoints, allPoints }) => (
  <div className={styles.conteiner}>
    <div className={styles.progressConteiner}>
      <p className={styles.text}>Балів з початку тиждня:</p>
      <span className={styles.selectedPoints}>{currentPoints}</span>
      <span className={styles.allPoints}> / {allPoints}</span>
      <progress max={allPoints} value={currentPoints} className={styles.progressRange}></progress>
    </div>
  </div>
);

ProgressBar.propTypes = {
  currentPoints: PropTypes.number,
  allPoints: PropTypes.number
};

export default ProgressBar;
