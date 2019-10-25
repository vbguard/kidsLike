import React from 'react';
import PropTypes from 'prop-types';
import { screenWidth } from '../../utils/var';
import styles from './SelectedTasksPoints.module.css';

const SelectedTasksPoints = ({ allPoints }) => (
  <div className={styles.conteiner}>
    {screenWidth > 768 && <p className={styles.text}>Визначено завдань на </p>}
    <span className={styles.points}>{allPoints}</span>
    <span className={styles.text}>бали</span>
  </div>
);

SelectedTasksPoints.propTypes = {
  allPoints: PropTypes.number
};

export default SelectedTasksPoints;
