import React from 'react';
//  import WeekRange from '../../components/WeekRange/WeekRange';
import Sidebar from '../../components/Sidebar/Sidebar';
import DaysNavConteiner from '../../components/DaysNav/DaysNavConteiner';
import DashboardInfo from '../../components/DashboardInfo/DashboardInfo';
// PlanningInfo from '../../components/PlanningInfo/PlanningInfo';

//    import CurrentDayTitle from '../../components/CurrentDayTitle/CurrentDayTitle';
//  import WeekSelected from '../../components/WeekSelected/WeekSelected';
//    import ProgressBar from '../../components/ProgressBar/ProgressBar';
//  import SelectedTasksPoints from '../../components/SelectedTasksPoints/SelectedTasksPoints';
//  import BonusTasks from '../../components/BonusTasks/BonusTasks';
import Prizes from '../../components/Prizes/Prizes';
import styles from './DashBoard.module.css';

const screenWidth = window.innerWidth;

const DashboardPage = () => (
  <div className={styles.wrapper}>
    {screenWidth >= 1280 ? <Sidebar /> : <DaysNavConteiner />}
    <DashboardInfo />
    {screenWidth < 1280 && <Prizes />}
  </div>
);

export default DashboardPage;
