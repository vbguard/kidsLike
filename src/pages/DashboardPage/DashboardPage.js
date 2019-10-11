import React from 'react';
import WeekRange from '../../components/WeekRange/WeekRange';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNav from '../../components/DaysNav/DaysNav';
import Prizes from '../../components/Prizes/Prizes';
import styles from './DashBoard.module.css';

const screenWidth = window.innerWidth;

const DashboardPage = () => (
  <div className={styles.wrapper}>
    {screenWidth >= 1280 ? <Sidebar /> : <DaysNav />}
    <WeekRange />
    {screenWidth < 1280 && <Prizes />}
  </div>
);

export default DashboardPage;
