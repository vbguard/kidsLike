import React from 'react';
import WeekRange from '../WeekRange/WeekRange';
import CurrentDayTitle from '../CurrentDayTitle/CurrentDayTitle';
import ProgressBar from '../ProgressBar/ProgressBar';
import Prizes from '../Prizes/Prizes';
import Footer from '../Footer/Footer';
import { screenWidth } from '../../utils/var';
import styles from './DashboardConteiner.module.css';

const DashboardConteiner = () => (
  <div className={styles.conteiner}>
    <WeekRange />
    <CurrentDayTitle />
    {screenWidth >= 768 && <ProgressBar />}
    {screenWidth < 768 && (
      <>
        <Prizes />
        <Footer />
      </>
    )}
    {screenWidth < 1280 && screenWidth >= 768 && <Prizes />}
  </div>
);

export default DashboardConteiner;
