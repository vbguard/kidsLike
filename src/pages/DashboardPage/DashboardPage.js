import React, { useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardConteiner from '../../components/DashboardConteiner/DashboardConteiner';
// import Footer from '../../components/Footer/Footer';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

import { screenWidth } from '../../utils/var';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  useEffect(() => {
    // action - який буде робити запит на бекенд на отримання завдань - потім їх пасати в стор
    // цей самий екшн буде робити перевірку чи юзер авторизований, якщо буде 401 статус код - має робитись редірект на логін
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
        <DashboardConteiner />
      </div>
      {screenWidth < 768 && <ProgressBar />}
    </>
  );
};

export default DashboardPage;
