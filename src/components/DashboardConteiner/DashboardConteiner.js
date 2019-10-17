import React from 'react';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import Prizes from '../Prizes/Prizes';
import { screenWidth } from '../../utils/var';
import styles from './DashboardConteiner.module.css';

const DashboardConteiner = () => (
  <div className={styles.conteiner}>
    <WeekRange />
    <CurrentDayTitle />
    <ProgressBar />
    {screenWidth < 1280 && <Prizes />}
  </div>
);

export default DashboardConteiner;
