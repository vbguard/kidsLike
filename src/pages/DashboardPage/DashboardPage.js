import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import { screenWidth } from '../../utils/var';
import styles from './DashBoard.module.css';

const DashboardPage = () => (
  <div className={styles.wrapper}>
    {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
    <DashboardConteiner />
  </div>
);

export default DashboardPage;
