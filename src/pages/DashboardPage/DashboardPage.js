import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
// import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';

const DashboardPage = () => (
  <>
    <div className={styles.wrapper}>
      {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
      <DashboardConteiner />
    </div>
    {screenWidth < 768 && <ProgressBar />}
  </>
);

export default DashboardPage;
