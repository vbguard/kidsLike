import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
import Footer from '../../components/Footer/Footer';

import { screenWidth } from '../../utils/var';
import styles from './Dashboard.module.css';

const DashboardPage = () => (
  <>
    <div className={styles.wrapper}>
      {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
      <DashboardConteiner />
    </div>
    <Footer />
  </>
);

export default DashboardPage;
