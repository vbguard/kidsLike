import React from 'react';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import SelectedTasksPoints from '../SelectedTasksPoints/SelectedTasksPoints';
import BonusTasks from '../BonusTasks/BonusTasks';
import styles from './PlanningInfo.module.css';

const PlanninfInfo = () => (
  <div className={styles.infoConteiner}>
    <CurrentDayTitle />
    <SelectedTasksPoints />
    <BonusTasks />
  </div>
);

export default PlanninfInfo;
