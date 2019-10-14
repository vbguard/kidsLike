import React from 'react';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './DashboardInfo.module.css';

const DashboardInfo = () => (
  <div className={styles.infoConteiner}>
    <WeekRange />
    <CurrentDayTitle />
    <ProgressBar />
  </div>
);

export default DashboardInfo;
