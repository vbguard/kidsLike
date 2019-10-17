import React from 'react';
import { screenWidth } from '../../utils/var';
import styles from './SelectedTasksPoints.module.css';

const SelectedTasksPoints = () => (
  <div className={styles.conteiner}>
    {screenWidth > 768 && <p className={styles.text}>Визначено завдань на </p>}
    <span className={styles.points}>22</span>
    <span className={styles.text}>бали</span>
  </div>
);

export default SelectedTasksPoints;
