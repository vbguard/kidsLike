import React from 'react';
import WeekRange from '../../components/WeekRange/WeekRange';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import CurrentDayTitle from '../../components/CurrentDayTitle/CurrentDayTitle';
import WeekSelected from '../../components/WeekSelected/WeekSelected';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Prizes from '../../components/Prizes/Prizes';
import styles from './DashBoard.module.css';

const screenWidth = window.innerWidth;

const DashboardPage = () => (
  <div className={styles.wrapper}>
    {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
    <WeekRange />
    <WeekSelected />
    <CurrentDayTitle />
    <ProgressBar />
    {screenWidth < 1280 && <Prizes />}
  </div>
);

export default DashboardPage;
