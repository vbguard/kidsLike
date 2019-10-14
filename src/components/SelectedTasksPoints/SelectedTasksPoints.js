import React from 'react';
import styles from './SelectedTasksPoints.module.css';

const SelectedTasksPoints = () => (
  <p className={styles.text}>
    Визначено завдань на
    <span className={styles.points}>22</span>бали
  </p>
);

export default SelectedTasksPoints;
